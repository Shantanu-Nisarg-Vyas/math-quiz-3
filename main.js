function addusers() {
    p1_name = document.getElementById("input_p1").value;
    p2_name = document.getElementById("input_p2").value;
    localStorage.setItem("p1 name", p1_name);
    localStorage.setItem("p2 name", p2_name);
    window.location="page2.html"
}