		
		const colorButton = document.getElementById('colorButton');
        const colores = ['lightsteelblue', 'lightgoldenrodyellow', 'lavender', 'mintcream', 'honeydew'];
        let indiceColor = 0;

        colorButton.addEventListener('click', () => {
            indiceColor = (indiceColor + 1) % colores.length;
            document.body.style.backgroundColor = colores[indiceColor];
        });

        const scrollBottomButton = document.getElementById('scrollBottomButton');
        scrollBottomButton.addEventListener('click', () => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        });

        const scrollTopButton = document.getElementById('scrollTopButton');
        scrollTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });