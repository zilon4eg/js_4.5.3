function getHole(index) {
    return document.getElementById(`${index}`);
}

(() => {

    var click = 0;
    var missclick = 0;

    // var hole;
    // for (step = 1; step < 10; step++) {
    //     hole = getHole(step);
    //     hole.onclick = () => {
    //         if (hole.className.includes('hole_has-mole')) {
    //             alert('tssgs');
    //         }
    //     }
    // }

    document.querySelector('.hole-game').addEventListener('click', function(e) {
        var id = e.target.id;
        if (getHole(id).className.includes('hole_has-mole')) {
            click += 1;
        }
        else {
            missclick += 1;
        }

        document.getElementById('dead').textContent = click;
        document.getElementById('lost').textContent = missclick;

        if (click === 10) {
            click = 0;
            missclick = 0;
            document.getElementById('dead').textContent = click;
            document.getElementById('lost').textContent = missclick;
            alert('Победа!')
        }
        else if (missclick === 10) {
            click = 0;
            missclick = 0;
            document.getElementById('dead').textContent = click;
            document.getElementById('lost').textContent = missclick;
            alert('Поражение!')
        }

        });

  })();