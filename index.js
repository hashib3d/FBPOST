const btn = document.querySelector('.dBtn');

btn.addEventListener('click', () =>{
    html2canvas(document.querySelector('.container'))
    .then(canvas =>{
        const url = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.setAttribute('download', 'imageName.png');
        a.setAttribute('href', url);
        a.click();
    }

    )
})