
        // Función para mostrar los datos al hacer clic en A domicilio o Recojo en tienda
        function mostrarDatosBox(opcion) {
            const datosDomicilio = document.getElementById('datos-domicilio');
            const datosRecojo = document.getElementById('datos-recojo');

            if (opcion === 'domicilio') {
                datosDomicilio.style.display = 'block';
                datosRecojo.style.display = 'none';
            } else if (opcion === 'recojo') {
                datosRecojo.style.display = 'block';
                datosDomicilio.style.display = 'none';
            }
        }

        // Función para realizar un pedido al hacer clic en "Quiero hacer mi pedido Ya"
        function hacerPedido(opcion) {
            if (opcion === 'domicilio') {
                // Lógica para hacer un pedido a domicilio
                alert('Pedido a domicilio realizado.');
            } else if (opcion === 'recojo') {
                // Lógica para hacer un pedido para recojo en tienda
                alert('Pedido para recojo en tienda realizado.');
            }
        }
    