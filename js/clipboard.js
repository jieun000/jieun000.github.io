$(function() {
    $('.highlighter-rouge').each(function(index) {
        var $highlight = $(this);
        var codeId = 'code_' + index;
        var language = $highlight.attr('class').split(' ').find(cls => cls.startsWith('language-')).substring('language-'.length);
        var capitalizedLanguage = language === 'plaintext' ? '' : capitalize(language);
        var clipboardTarget = '#' + codeId;

        $highlight.find('pre.highlight').before('<div class="code-header"><span class="language-label">' + capitalizedLanguage + '</span><span class="clipboard" data-clipboard-target="' + clipboardTarget + '"><i class="far fa-clipboard"></i></span></div>');
        $highlight.find('code').attr('id', codeId);
    });
    new ClipboardJS('.clipboard');
});

function capitalize(language) {
    return language.charAt(0).toUpperCase() + language.slice(1);
}
