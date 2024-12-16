import Cart from "../models/Cart.js";

// Add a new cart
export const addCart = async (req, res) => {
  const cart = new Cart(req.body);
  try {
    if (cart) {
      await cart.save();
      return res.status(200).json({
        success: true,
        message: "Cart added successfully",
        data: cart,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Failed to add cart",
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Error saving cart: ${err.message}`,
    });
  }
};

// Get all carts
export const getAllCart = async (req, res) => {
  try {
    const carts = await Cart.find();
    return res.status(200).json({
      success: true,
      message: "All carts fetched successfully",
      data: carts,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Error fetching carts: ${err.message}`,
    });
  }
};

//delete cart by id
export const deleteCart = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);
    if (!cart) {
      return res.status(200).json({
        success: false,
        message: "Cart not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Cart deleted successfully",
      data: cart,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Error deleting cart: ${err.message}`,
    });
  }
};

//edit cart by id
export const editCart = async (req, res) => {
  try {
    // Update the cart using the provided ID and new data
    const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true }); // { new: true } returns the updated document
    if (!cart) {
      return res.status(200).json({
        success: false,
        message: "Cart not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Cart updated successfully",
      data: cart, // Send back the updated cart
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Error updating cart: ${err.message}`,
    });
  }
};

//get cart by id
export const getCartById = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    if (!cart) {
      return res.status(200).json({
        success: false,
        message: "Cart not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Cart fetched successfully",
      data: cart,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Error fetching cart: ${err.message}`,
    });
  }
};


