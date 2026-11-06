var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        
        if (content.style.maxHeight){
            var heightToSubtract = content.scrollHeight;
            content.style.maxHeight = null;
            
            var parent = this.parentElement.closest('.content');
            while (parent) {
                if (parent.style.maxHeight) {
                    parent.style.maxHeight = (parseInt(parent.style.maxHeight) - heightToSubtract) + "px";
                }
                parent = parent.parentElement.closest('.content');
            }
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            var heightToAdd = content.scrollHeight;
            
            var parent = this.parentElement.closest('.content');
            while (parent) {
                if (parent.style.maxHeight) {
                    parent.style.maxHeight = (parseInt(parent.style.maxHeight) + heightToAdd) + "px";
                }
                parent = parent.parentElement.closest('.content');
            }
        }
    });
}

document.querySelectorAll('.remote-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = link.getAttribute('href').substring(1);
        const targetButton = document.getElementById(targetId);
        
        if (targetButton) {
            targetButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            if (!targetButton.classList.contains('active')) {
                targetButton.click();
            }
        }
    });
});
