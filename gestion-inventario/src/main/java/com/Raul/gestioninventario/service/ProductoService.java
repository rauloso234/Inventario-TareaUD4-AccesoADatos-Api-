package com.Raul.gestioninventario.service;
import com.Raul.gestioninventario.repository.ProductoRepository;
import com.Raul.gestioninventario.model.productos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductoService {
    @Autowired
    private ProductoRepository productoRepository;

    public productos saveProducto(productos productos) {
        // Añadir validación si es necesario
        return productoRepository.save(productos);
    }

    public List<productos> getAllProductos() {
        return productoRepository.findAll();
    }

    public productos getProductoById(Integer id) {
        return productoRepository.findById(id).orElse(null);
    }

    public productos updateProducto(productos productos) {
        // Añadir validación si es necesario
        return productoRepository.save(productos);
    }

    public void deleteProducto(Integer id) {
        productoRepository.deleteById(id);
    }
}



