#!/usr/bin/env python3
"""
build.py — 섹션 조각을 합쳐 완성 페이지를 만드는 스크립트

사용법:   python build.py        (Python 3 만 있으면 됩니다. 추가 설치 없음)

만들어지는 파일
  1) index.html                    : css/, js/, assets/ 폴더를 참조하는 일반 버전 (웹 호스팅용)
  2) dist/dr-minari-single.html    : CSS·JS·이미지를 모두 한 파일에 담은 단일 파일 버전
                                     (메일 첨부, 단일 파일만 올릴 수 있는 곳용)

index.template.html 안의 <!-- @include sections/xxx.html --> 자리에
sections/ 폴더의 파일 내용이 들어갑니다.
"""
import base64, mimetypes, re
from pathlib import Path

ROOT = Path(__file__).parent
INCLUDE = re.compile(r"<!--\s*@include\s+(\S+)\s*-->")

def read(p):
    return (ROOT / p).read_text(encoding="utf-8")

def assemble():
    html = read("index.template.html")
    def repl(m):
        path = m.group(1)
        if not (ROOT / path).exists():
            raise SystemExit(f"[오류] include 파일이 없습니다: {path}")
        return read(path).rstrip("\n")
    return INCLUDE.sub(repl, html)

def to_single(html):
    # CSS 인라인
    html = re.sub(r'<link rel="stylesheet" href="([^"]+\.css)">',
                  lambda m: f"<style>\n{read(m.group(1))}\n</style>", html)
    # JS 인라인
    html = re.sub(r'<script src="([^"]+\.js)"></script>',
                  lambda m: f"<script>\n{read(m.group(1))}\n</script>", html)
    # 이미지 인라인 (base64)
    def img(m):
        p = ROOT / m.group(1)
        mime = mimetypes.guess_type(p.name)[0] or "application/octet-stream"
        return 'src="data:%s;base64,%s"' % (mime, base64.b64encode(p.read_bytes()).decode())
    html = re.sub(r'src="(assets/[^"]+)"', img, html)
    return html

if __name__ == "__main__":
    page = assemble()
    banner = "<!-- 자동 생성 파일입니다. 직접 수정하지 말고 sections/, css/, js/ 를 수정한 뒤 `python build.py` 를 실행하세요. -->\n"
    out = page.replace("<!DOCTYPE html>\n", "<!DOCTYPE html>\n" + banner, 1)
    (ROOT / "index.html").write_text(out, encoding="utf-8")
    (ROOT / "dist").mkdir(exist_ok=True)
    (ROOT / "dist" / "dr-minari-single.html").write_text(to_single(out), encoding="utf-8")
    print("완료: index.html, dist/dr-minari-single.html")
