function getFormvalue() {
    //Write your code here
	const first =  document.getElementsByTagName("input")[0].value;
	const last =  document.getElementsByTagName("input")[1].value;
	alert(`${first} ${last}`);
}
