const ratings = document.querySelectorAll('.work-area__raiting');

if (ratings.length > 0) {
    initRatings();
}

function initRatings() {
    let ratingActive, ratingValue;
    for (let idx = 0; idx < ratings.length; idx++) {
        const rating = ratings[idx];
        initOneRating(rating);
    }


    function initOneRating(rating) {
        initRatingVars(rating);
        setActiveWidth();

        if (rating.classList.contains('work-area__raiting-set')) {
            setRating(rating);
        }
    }

    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.work-area__raiting-active');
        ratingValue = rating.querySelector('.work-area__raiting-num');
    }

    function setActiveWidth(index = ratingValue.innerHTML) {
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }

    function setRating(rating) {
        const ratingItems = rating.querySelectorAll('.work-area__raiting-item');
        for (let idx = 0; idx < ratingItems.length; idx++) {
            const ratingItem = ratingItems[idx];
            ratingItem.addEventListener('mouseenter', function (e) {
                initRatingVars(rating);
                setActiveWidth(ratingItem.value);
            });

            ratingItem.addEventListener('mouseleave', function (e) {
                setActiveWidth();
            });

            ratingItem.addEventListener('click', function (e) {
                initRatingVars(rating);

                ratingValue.innerHTML = idx + 1;
                setActiveWidth();
            });
        }
    }
}