package com.Raul.gestioninventario.controller;

import com.Raul.gestioninventario.model.productos;
import com.Raul.gestioninventario.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inventario")
@CrossOrigin(origins = "*") // Permitir acceso de cualquier origen

public class ProductoController {
    @Autowired
    private ProductoService productoService;

    @PostMapping("/guardar")
    public productos createProducto(@RequestBody productos productos) {
        return productoService.saveProducto(productos);
    }

    @GetMapping("/mostrarTodos")
    public List<productos> getAllProductos() {
        return productoService.getAllProductos();
    }


    @GetMapping("/obtener/{id}")
    public productos getProductoById(@PathVariable Integer id) {
        return productoService.getProductoById(id);
    }

    @PutMapping("/modificar/{id}")
    public productos updateProducto(@RequestBody productos productos) {
        return productoService.updateProducto(productos);
    }

    @DeleteMapping("/eliminar/{id}")
    public String deleteProducto(@PathVariable Integer id) {
        productoService.deleteProducto(id);
        return "Producto eliminado con id: " + id;
    }
}
