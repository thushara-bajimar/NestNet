# from pathlib import Path
# import re
# p = Path(r"init/data.js")
# s = p.read_text(encoding="utf-8")
# pat = re.compile(r"""image:\s*\{\s*filename:\s*[\"]listingimage[\"]\s*,\s*url:\s*[\"]([^\"]+)[\"]\s*\}""", re.S)
# s = pat.sub('image: "\\1"', s)
# p.write_text(s, encoding="utf-8")
