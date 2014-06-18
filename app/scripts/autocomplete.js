$("#stock").autocomplete({
    source: function (request, response) {
        
        // faking the presence of the YAHOO library bc the callback will only work with
        // "callback=YAHOO.Finance.SymbolSuggest.ssCallback"
        var YAHOO = window.YAHOO = {Finance: {SymbolSuggest: {}}};
        
        YAHOO.Finance.SymbolSuggest.ssCallback = function (data) {
            var mapped = $.map(data.ResultSet.Result, function (e, i) {
                return {
                    label: e.symbol + ' (' + e.name + ')',
                    value: e.symbol
                };
            });
            response(mapped);
        };
        
        var url = [
            "http://d.yimg.com/autoc.finance.yahoo.com/autoc?",
            "query=" + request.term,
            "&callback=YAHOO.Finance.SymbolSuggest.ssCallback"];

        $.getScript(url.join(""));
    },
    minLength: 2
});