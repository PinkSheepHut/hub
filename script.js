function onload() {
    loadParticles();
    loadSections(sections);
}

function loadParticles() {
    let count = 4;
    let step = 15;
    let periodY = 100 / count;

    for (let C = 1; C <= count; C++) {
        let c = C - 1;
        let fromY = c * periodY;
        let indexZ = Math.floor(C / count);
        let amount = C * step;

        for (let s = 1; s <= amount; s++) {
            let x = random(0, 100);
            let y = random(fromY, periodY);

            let style = (
                `--s:${random(2, c)}px; ` +
                `--d:${random(25.5, 10.5)}s; ` +
                `--x1:${x}vw; ` +
                `--y1:${y}vh; ` +
                `--x2:${x + random(-25, 50)}vw; ` +
                `--y2:${y + random(0, -periodY)}vh; ` +
                `--z:${indexZ};`
            );
    
            let particle = document.createElement("div");
            particle.className = 'particle';
            particle.style = style;
            
            document.getElementById("background").append(particle);
        }
    }
}

function loadSections(sections) {
    sections.forEach(function(value, index, array) {
        let nextIndex = (index != (array.length - 1) ? index + 1 : 0);
        let link = value.comingsoon ? 
            `<span>Скоро</span>` : 
            `<a href="${value.link}">${value.description}</a>`;
        
        let mask = document.createElement("div");
        mask.className = 'mask';
        mask.id = `section-${index}`;
        mask.innerHTML = (
            `<div class="section">\n` +
                `<h2 class="header">${value.title}</h2>\n` +
                `<div class="content">\n` +
                    `${value.content}\n` +
                    `<div class="link">\n` +
                        `${link}\n` +
                    `</div>\n` +
                `</div>` +
                `<div class="footer">\n` +
                    `<a href="#section-${nextIndex}"></a>\n` +
                `</div>\n` +
            `</div>`
        );
        
        document.getElementById("info").append(mask);
    });
}

function random(from, interval) {
    return (from + Math.floor(Math.random() * interval));
}