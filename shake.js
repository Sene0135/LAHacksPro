function shakenbake(){
    const btn = document.getElementById('js-btn');

    const shaking = [
        { transform: 'rotate(0deg)', },
        { transform: 'rotate(5deg)', },
        { transform: 'rotate(0eg)', },
        { transform: 'rotate(-5deg)', },
        { transform: 'rotate(0deg)', },
    ];

    const timing = {
        duration: 100,
        iterations: 15,
    };

    btn.animate(shaking, timing);
}