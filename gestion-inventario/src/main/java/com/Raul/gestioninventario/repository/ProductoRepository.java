package com.Raul.gestioninventario.repository;


import com.Raul.gestioninventario.model.productos;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepository extends JpaRepository<productos, Integer> {

}
