$(document).ready(() => {
    const list = () => {
        $.ajax({
            url: "http://localhost:8080/api/inventario/mostrarTodos",
            type: "GET",
            dataType: "json",
            success: function (res) {
                let data = "";
                res.forEach(element => {
                    data += `
                <tr>
                    <td>${element.id}</td>
                    <td>${element.nombre}</td>
                    <td>${element.precio}</td>
                    <td>${element.cantidad}</td>
                    <td>${element.categoria}</td>
                    
                    <td>
                     <button class="btn btn-danger btn-delete" data-id="${element.id}">Eliminar</button>
                    </td>
                    
                     <td>
                     <button class="btn btn-warning btn-editar" data-id="${element.id}">Editar</button>
                    </td>
</td>
                </tr>
                `
                });
                $("#tablabody").html(data);
            }
        })
    }

    const save = () => {
        $("#agregar").on('click', function () {
            const producto = {
                nombre: $('#nombre').val(),
                precio: $('#precio').val(),
                cantidad: $('#cantidad').val(),
                categoria: $('#categoria').val(),

            }
            $.ajax({
                url: "http://localhost:8080/api/inventario/guardar",
                contentType: "application/json",
                type: "POST",
                data: JSON.stringify(producto),
                dataType: "json",
                success: (data) => {
                    list();
                    reset();
                    console.log("Producto agregado");
                }
            })


        })
    }

//Eliminar alumno

    const deleteProducto = () => {
        $(document).on('click', '.btn-delete', function () {
            let id = $(this).data('id'); // Obtiene el ID del producto
            $.ajax({
                url: `http://localhost:8080/api/inventario/eliminar/${id}`, // Corrección: backticks para permitir la interpolación
                type: "DELETE",
                success: function () {
                    console.log("Producto eliminado con ID:", id);
                    list(); // Actualiza la lista de productos
                },
                error: function (xhr, status, error) {
                    console.error("Error al eliminar producto", status, error);
                }
            });
        });
    }

    deleteProducto();



    const rellenarProducto = () => {
        $(document).on('click', '.btn-editar', function () {
            let id = $(this).data('id');

            $('#agregar').hide(); // Esconde el botón de agregar
            $('#modificar').show(); // Muestra el botón de modificar que debe estar en tu HTML

            $.ajax({
                url: `http://localhost:8080/api/inventario/obtener/${id}`, // Endpoint correcto
                type: "GET",
                dataType: "json",
                success: (res) => {
                    $('#id').val(res.id);
                    $('#nombre').val(res.nombre);
                    $('#precio').val(res.precio);
                    $('#cantidad').val(res.cantidad);
                    $('#categoria').val(res.categoria);
                },
                error: function (xhr, status, error) {
                    console.error("Error al obtener detalles del producto", status, error);
                }
            });
        });
    }

    rellenarProducto();


    const editAlumno = () => {
        $('#modificar').on('click', function () {
            let id = $('#id').val();
            $('#agregar').css('display', 'none');
            $('#modificar').css('display', 'block');

            const producto = {
                id: id,
                nombre: $('#nombre').val(),
                precio: $('#precio').val(),
                cantidad: $('#cantidad').val(),
                categoria: $('#categoria').val(),
            }
            $.ajax({
                url: `http://localhost:8080/api/inventario/modificar/${id}`,
                contentType: 'application/json',
                type: "PUT",
                data: JSON.stringify(producto),
                dataType: "json",
                success: (res) => {
                    $('#modificar').css('display', 'none');
                    $('#agregar').css('display', 'block');

                    reset();
                    list();
                },
                error: function (xhr, status, error) {
                    console.error("Error al modificar el producto", status, error);
                }
            });
        });
    }

    editAlumno();



    const reset = () => {
        $("#nombre").val("");
        $("#precio").val("");
        $("#cantidad").val("");
        $("#categoria").val("");
    }



    list();
    save();
})