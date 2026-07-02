FOLDER GUIDE
=============

index.html         -> the page itself (open this in a browser to view the site)
css/style.css       -> all styling
js/app.js            -> login, location dropdown, test-series listing/detail pages
js/exam.js            -> calculator, exam instructions, test player, timer, submission
js/questions/         -> ONE FILE PER TEST — this is where you type questions
                         and set diagram images. Open the file for the test you
                         want to edit (e.g. cs-subjectwise-test-5.js) — every
                         question is a plain object with:
                            text     -> the question wording (type it here)
                            image    -> "images/filename.png" or null
                            options  -> the 4 answer choices
                            correct  -> index of the right option (0=A,1=B,2=C,3=D)
                            marks/neg-> positive/negative marks

                         To make a NEW test, copy
                         js/questions/_TEMPLATE-copy-me-for-new-test.js,
                         rename it, fill in your questions, then add a
                         <script> line for it in index.html (see the
                         comments right above the existing <script> tag
                         for cs-subjectwise-test-5.js) and wire it up in
                         js/exam.js (see the comment inside
                         proceedFromInstructions()).

images/               -> put your diagram/screenshot images here.

Nothing about how the site looks or behaves has changed — this is only a
files split so editing questions/images is easy and doesn't require
digging through one giant HTML file.
