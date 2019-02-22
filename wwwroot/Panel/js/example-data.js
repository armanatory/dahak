ExampleData = {};

ExampleData.pagedReponse = function(settings) {
    // Return mockjax response; handle paging and sorting
    var page = settings.data.page || 1;
    var order_by = settings.data.order_by;
    var sortorder = settings.data.sortorder;

	var rows_per_page = 5;
	var start_index = (page - 1) * rows_per_page;

	var total_pages = 1;
	var data = ExampleData.fruits;
	if (data.length != 0) {
		total_pages = parseInt((data.length - 1) / rows_per_page) + 1;
	}

	if (order_by) {
		data.sort(function(left, right) {
			var a = left[order_by];
			var b = right[order_by];

			if (sortorder == 'desc') {
				var c = b;
				b = a;
				a = c;
			}

			if (a < b) {
				return -1;
			}
			else if (a > b) {
				return 1;
			}
			else {
				return 0;
			}
		});
	}

	var result = {
		total_pages: total_pages,
		rows: data.slice(start_index, start_index + rows_per_page)
	};
    this.responseText = result;
};

ExampleData.fruits = [{
    "latin_name": "Persea americana",
    "name": "Avocado"
},
{
    "latin_name": "Capsicum annuum",
    "name": "Bell pepper"
},
{
    "latin_name": "Momordica charantia",
    "name": "Bitter melon"
},
{
    "latin_name": "Cucurbita pepo",
    "name": "Courgette"
},
{
    "latin_name": "Cucumis sativus",
    "name": "Cucumber"
},
{
    "latin_name": "Coccinia grandis",
    "name": "Ivy Gourd"
},
{
    "latin_name": "Solanum melongena",
    "name": "Eggplant"
},
{
    "latin_name": "Cucurbita spp.",
    "name": "Pumpkin"
},
{
    "latin_name": "Zea mays",
    "name": "Sweet corn"
},
{
    "latin_name": "Capsicum annuum Grossum group",
    "name": "Sweet pepper"
},
{
    "latin_name": "Praecitrullus fistulosus",
    "name": "Tinda"
},
{
    "latin_name": "Physalis philadelphica",
    "name": "Tomatillo"
},
{
    "latin_name": "Solanum lycopersicum var",
    "name": "Tomato"
},
{
    "latin_name": "Benincasa hispida",
    "name": "Winter melon"
},
{
    "latin_name": "Cucumis anguria",
    "name": "West Indian gherkin"
},
{
    "latin_name": "Cucurbita pepo",
    "name": "Zucchini"
}];