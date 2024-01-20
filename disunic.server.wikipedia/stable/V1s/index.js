$(document).ready(function () {
    function getArticles(userQuery) {
        var wikiApiUrl = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&?redirect=fals&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&pithumbsize=400&explaintext&exsentences=1&exlimit=max&gsrsearch=' + userQuery + '&callback=?';
        $.getJSON(wikiApiUrl, function (articles) {
            renderArticlesMarkup(articles);
        });
    }
    function renderArticlesMarkup(articles) {
        var articlesMarkup = '';
        if (articles.query === undefined) {
            articlesMarkup += '<div class="error"><p class="p1">Your Keyword did not match our Database 🤖</p> <p class="p2">Suggestions:</p><li>Make sure that all words are spelled correctly.</li><li>Try different keywords.</li><li>Try more general keywords.</li></div>';
        }
        else {
            var pages = articles.query.pages;
            for (var property in pages) {
                if (pages.hasOwnProperty(property)) {
                    articlesMarkup += '<div class="article" id="artical"><a id="ra" href="https://en.wikipedia.org/wiki/' + pages[property].title + '" target="_blank">' + '<h2 class="rah" id="rah">' + pages[property].title + '</h2><div class="snippet" id="ras">';
                    if (pages[property].thumbnail !== undefined) {
                        articlesMarkup += '<img src="' + pages[property].thumbnail.source + '">';
                    }
                    articlesMarkup += '<p>' + pages[property].extract + '</p></div></div></a>';
                }
            }
            // Design After Result
            $('.logo').css('display', 'none');
            $('.searchfunction').css('width', '90%');
            $('.wrap').css('position', 'fixed');
            $('.wrap').css('width', '100%');
            $('.wrap').css('padding', '10px 0px 10px 0px');
            $('.wrap').css('background', '#f2f4f7');
            $('.wrap').css('animation', 'borderanii 8s infinite','borderaniii 100ms');
            $('.searchfunction').css('border', 'none');
            $('.searchfunction').css('box-shadow', 'none');
            $('.searchfunction').css('margin-top', '0px');
            $('.result').css('display', 'block');
            $('.result').css('margin-top', '80px');
            $('.closewiki').css('display', 'block');
            $('.refresh').css('display', 'none');
            $('.about').css('display', 'none');
            // $('.design').css('display', 'block');
            $('.design2').css('display', 'none');
            $('.srch-suggest').css('display', 'none');
            $('.srch-suggest').css('width', '90%');
        }
        $('.result').html(articlesMarkup);
    }

    $('#search').on('click', function () {
        getArticles($('#query').val());
    });

    $('#query').keydown(function (event) {
        if (event.which == 13) {
            getArticles($('#query').val());
        }
    });
});


