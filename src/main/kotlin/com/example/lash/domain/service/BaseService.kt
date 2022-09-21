package com.example.lash.domain.service

import org.springframework.data.jpa.repository.support.SimpleJpaRepository
import javax.persistence.EntityManager
import kotlin.reflect.KClass

abstract class BaseService<E : Any, ID : java.io.Serializable?> (
    clazz: KClass<E>,
    entityManager: EntityManager): SimpleJpaRepository<E, ID>(clazz.java, entityManager){

    }

