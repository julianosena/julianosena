# Portfolio QA
Checked in Chrome via the static HTTP entry point at 1440, 390 and 320 CSS pixels.

- AC-01 passed. The opening identifies Juliano, senior backend engineering, technical leadership and US work authorization. Desktop screenshot inspection confirmed the wordmark and building banner render.
- AC-02 passed. The two case studies match Resume.pdf on employers, contributions, technologies and scale.
- AC-03 passed. All seven resume roles appear. Enter on the earlier-career disclosure revealed the remaining roles. The profile lists education, credentials and language levels.
- AC-04 passed for local destinations. Chrome downloaded the same bytes as the bundled three-page resume. Email, telephone and LinkedIn destinations match the resume. External app handling and the live LinkedIn profile were not verified.
- AC-05 passed for the checks exercised. All internal fragment targets exist. Work navigation reached its section, Tab reached the skip link first, and no horizontal overflow occurred at any tested width.

Screen-reader and cross-browser testing were outside this pass.

## Revision checks
AC-06 and AC-07 passed in Chrome at 320, 390, 800 and 1440 CSS pixels. The portrait loaded in the first viewport, the authorization appeared near the name, the Technologies link reached all six groups and the page fit the viewport. Over HTTP the downloaded PDF matched the original bytes. The offline ZIP passed its integrity check and contained the updated entry point. Chrome did not emit a download event for the local file URL.

AC-08 passed in Chrome at widths of 320, 390, 800 and 1440 CSS pixels. Portrait right edge was left of the name at every width, the layout fit the viewport, the engagements disclosure opened and no GitHub links remained. Verified ZIP integrity and HTML equality with the revised site.

AC-09 passed in Chrome at widths 320, 390, 800 and 1440. Both project results and all ten sourced disclosures were present, earlier engagements expanded, no horizontal overflow occurred, and the refreshed ZIP matched the site entry point.
