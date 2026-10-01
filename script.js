/* =====================================================
   PORTFOLIO JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       GET MAIN ELEMENTS
    ================================================= */

    const enterBtn =
        document.getElementById("enterBtn");

    const intro =
        document.getElementById("intro");

    const animation =
        document.getElementById("animation");

    const car =
        document.getElementById("car");

    const name =
        document.getElementById("name");

    const portfolio =
        document.getElementById("portfolio");


    /* =================================================
       ENTER BUTTON
    ================================================= */

    if (enterBtn) {

        enterBtn.addEventListener("click", function () {


            /* -----------------------------------------
               HIDE INTRO
            ----------------------------------------- */

            if (intro) {

                intro.style.display = "none";

            }


            /* -----------------------------------------
               SHOW ANIMATION
            ----------------------------------------- */

            if (animation) {

                animation.classList.add("show");

            }


            /* -----------------------------------------
               CAR + NAME START MOVING
            ----------------------------------------- */

            setTimeout(function () {

                if (car) {

                    car.classList.add("move");

                }


                if (name) {

                    name.classList.add("move");

                }

            }, 200);


            /* -----------------------------------------
               CAR LEAVES
            ----------------------------------------- */

            setTimeout(function () {

                if (car) {

                    car.classList.add("leave");

                }

            }, 2700);


            /* -----------------------------------------
               NAME ZOOMS
            ----------------------------------------- */

            setTimeout(function () {

                if (name) {

                    name.classList.add("zoom");

                }

            }, 3900);


            /* -----------------------------------------
               SHOW PORTFOLIO
            ----------------------------------------- */

            setTimeout(function () {

                if (animation) {

                    animation.style.display = "none";

                }


                if (portfolio) {

                    portfolio.style.display = "block";

                }


                window.scrollTo(0, 0);

            }, 5000);


        });

    }


    /* =================================================
       ABOUT SECTION
    ================================================= */

    const aboutSection =
        document.querySelector(".about-section");

    const aboutText =
        document.getElementById("aboutText");

    const aboutHighlight =
        document.querySelector(".about-highlight");

    const aboutStats =
        document.querySelectorAll(".about-stat");


    let aboutStarted = false;


    /* =================================================
       CREATE WORD-BY-WORD TEXT
    ================================================= */

    if (aboutText) {

        const originalText =
            aboutText.textContent
                .replace(/\s+/g, " ")
                .trim();


        const words =
            originalText.split(" ");


        aboutText.innerHTML = "";


        words.forEach(function (word, index) {

            const span =
                document.createElement("span");


            span.classList.add(
                "about-word"
            );


            span.textContent = word;


            aboutText.appendChild(span);


            if (
                index <
                words.length - 1
            ) {

                aboutText.appendChild(
                    document.createTextNode(" ")
                );

            }

        });

    }


    /* =================================================
       GET ABOUT WORDS
    ================================================= */

    const aboutWords =
        document.querySelectorAll(
            ".about-word"
        );


    /* =================================================
       START ABOUT ANIMATION
    ================================================= */

    function startAboutAnimation() {

        if (aboutStarted) {

            return;

        }


        aboutStarted = true;


        if (aboutSection) {

            aboutSection.classList.add(
                "about-visible"
            );

        }


        /* -----------------------------------------
           WORD BY WORD
        ----------------------------------------- */

        aboutWords.forEach(function (word, index) {

            setTimeout(function () {

                word.classList.add(
                    "word-visible"
                );

            }, 1300 + (index * 95));

        });


        /* -----------------------------------------
           TEXT DURATION
        ----------------------------------------- */

        const textDuration =
            1300 +
            (aboutWords.length * 95);


        /* -----------------------------------------
           HIGHLIGHT
        ----------------------------------------- */

        setTimeout(function () {

            if (aboutHighlight) {

                aboutHighlight.classList.add(
                    "highlight-visible"
                );

            }

        }, textDuration + 300);


        /* -----------------------------------------
           ABOUT STATS
        ----------------------------------------- */

        setTimeout(function () {

            aboutStats.forEach(function (stat, index) {

                setTimeout(function () {

                    stat.classList.add(
                        "stat-visible"
                    );

                }, index * 180);

            });

        }, textDuration + 700);

    }


    /* =================================================
       ABOUT OBSERVER
    ================================================= */

    if (aboutSection) {

        const aboutObserver =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            startAboutAnimation();


                            aboutObserver.unobserve(
                                aboutSection
                            );

                        }

                    });

                },

                {
                    threshold: 0.25
                }

            );


        aboutObserver.observe(
            aboutSection
        );

    }


    /* =================================================
       SKILLS SECTION
    ================================================= */

    const skillsSection =
        document.querySelector(
            ".skills-section"
        );


    let skillsStarted = false;


    function startSkillsAnimation() {

        if (skillsStarted) {

            return;

        }


        skillsStarted = true;


        if (skillsSection) {

            skillsSection.classList.add(
                "skills-visible"
            );

        }

    }


    /* =================================================
       SKILLS OBSERVER
    ================================================= */

    if (skillsSection) {

        const skillsObserver =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            startSkillsAnimation();


                            skillsObserver.unobserve(
                                skillsSection
                            );

                        }

                    });

                },

                {
                    threshold: 0.2
                }

            );


        skillsObserver.observe(
            skillsSection
        );

    }


    /* =================================================
       PROJECTS SECTION
    ================================================= */

    const projectsSection =
        document.querySelector(
            ".projects-section"
        );


    let projectsStarted = false;


    function startProjectsAnimation() {

        if (projectsStarted) {

            return;

        }


        projectsStarted = true;


        if (projectsSection) {

            projectsSection.classList.add(
                "projects-visible"
            );

        }

    }


    /* =================================================
       PROJECTS OBSERVER
    ================================================= */

    if (projectsSection) {

        const projectsObserver =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            startProjectsAnimation();


                            projectsObserver.unobserve(
                                projectsSection
                            );

                        }

                    });

                },

                {
                    threshold: 0.15
                }

            );


        projectsObserver.observe(
            projectsSection
        );

    }


    /* =================================================
       CONTACT SECTION
    ================================================= */

    const contactSection =
        document.querySelector(
            ".contact-section"
        );


    let contactStarted = false;


    function startContactAnimation() {

        if (contactStarted) {

            return;

        }


        contactStarted = true;


        if (contactSection) {

            contactSection.classList.add(
                "contact-visible"
            );

        }

    }


    /* =================================================
       CONTACT OBSERVER
    ================================================= */

    if (contactSection) {

        const contactObserver =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            startContactAnimation();


                            contactObserver.unobserve(
                                contactSection
                            );

                        }

                    });

                },

                {
                    threshold: 0.15
                }

            );


        contactObserver.observe(
            contactSection
        );

    }

});