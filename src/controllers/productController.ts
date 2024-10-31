import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/Product";
// v Trae la tabla/entidad 'Producto' de la base de datos v //
const productRepository = AppDataSource.getRepository(Product);
// ^ ___________________________________________________ ^ //

// v Obtener todos los productos v //
export const getAllProducts = async (req: Request, res: Response) => {
  try { 
    const products = await productRepository.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({
        message: "Error al obtener los productos."
    });
  }
 };

// v Obtener un producto v //
export const getProductByID = async (req: Request, res: Response) => {
    try {
        const product = await productRepository.findOneBy({
            id: parseInt(req.params.id)
        });
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({
                message: "Producto no encontrado."
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener el producto."
        })
    }
 };

// v Crear un producto v //
export const createProduct = async (req: Request, res: Response) => {
    try {
    } catch (error) {

    }
 };

  // v Actualizar un producto existente v //
export const updateProduct = async (req: Request, res: Response) => {
    try {
    } catch (error) {
        
    }
 };

  // v Eliminar un producto existente v //
export const deleteProduct = async (req: Request, res: Response) => {
    try {
    } catch (error) {

    }
 };
  