document.getElementById("top").innerHTML =
	'<div class="content">' +
		'<h1>CIVIL WAR</h1>' +
	'</div>' +

	'<div class="topnav">' +
		'<a href="index">Overview</a>' +
		'<div class="dropdown">' +
            '<a href="abolitionists">Abolitionists</a>' +
            '<div class="dropdown-content">' +
                '<a href="abolitionists.html#harriettubman">Harriet Tubman</a>' +
                '<a href="abolitionists.html#fredrickdouglass">Frederick Douglass</a>' +
            '</div>' +
        '</div>' +
		'<a href="election_of_1860">Election of 1860</a>' +
        '<a href="secession">Confederate Secession</a>' +
        '<a href="antietam">Battle of Antietam</a>' +
        '<div class="dropdown">' +
            '<a href="leaders">Leaders</a>' +
            '<div class="dropdown-content">' +
                '<a href="leaders.html#abrahamlincoln">Abraham Lincoln</a>' +
                '<a href="leaders.html#robertelee">Robert E. Lee</a>' +
            '</div>' +
        '</div>' +
		'<a href="bibliography">Bibliography</a>' +
        '<a href="../index" class="home" style="float: right;">Home</a>' +
	'</div>';

var linkz = document.getElementsByClassName("topnav")[0].children;

for (var i = 0; i < linkz.length; i++) {
    if (linkz[i].href === window.location.href) {
        linkz[i].classList.add('active');
    } else if (linkz[i].className === "dropdown") {
        if (linkz[i].children[0].href === window.location.href){
            linkz[i].children[0].classList.add('active');
        }
    }
}