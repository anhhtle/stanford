'use strict';

const template1 = $(
    `<div class="template-container">
        <div class="text-intro">
            <h2>Overview</h2>
            <p>Thank you for the opportunity to interview for this position!</p>
        </div>
        <div class="text-main">
            <h2>Main</h2>
            <p>I will just make this short as I hope this will illustrate my work habit and interest 
            in this position. The page is built with HTML/CSS/JQuery. Hopefully I had time to make this responsive (flexbox).</p>
        </div>
        <div class="text-closing">
            <h2>Closing</h2>
            <p>Have a good day and I hope to hear from you soon!</p>
        </div>
    </div>`
);

const template2 = $(
    `<div class="template-container">
        <div class="text-main">
            <h2>Lorem</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                anim id est laborum.
            </p>
        </div>
    </div>`
);

const template3 = $(
    `<div class="template-container">
        <div class="text-main">
            <h2>Lorem 2</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, 
                qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non 
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat 
                voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis 
                suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum 
                iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
                vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
        </div>
    </div>`
);

let changeTabContent = (newID) => {
    if(newID === 'thank')
        $('.tab-content-left').html(template1);
    else if (newID === 'lorem1')
        $('.tab-content-left').html(template2);
    else
        $('.tab-content-left').html(template3);
};

$('.nav-li').on('click', function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');

    changeTabContent($(this).attr('id'))
})
