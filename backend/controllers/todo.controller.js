import { Todo } from "../models/todo.model.js";

const getTodos = async( req, res) => {
  const todos = await Todo.find()
  res.send(todos)
}

const savaTodo = async( req, res) => {
  const { todo } = req.body

  Todo.create({todo})
  .then(data => {
            console.log("Todo Saved successfully in DB.....");
            res.status(201).send(data)
  })
  .catch((error) => {console.log("Error while saving todo:",error);
  res.send({ error: error, msg: "something went wrong while Saving!!" });
  });

}

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { todo } = req.body;

  try {
    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: id },
      { $set: { todo } },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).send({ msg: 'Todo not found' });
    }

    console.log('Todo updated successfully in DB.....');
    res.send('Updated successfully');
  } catch (error) {
    console.log('Error while updating todo:', error);
    res.status(500).send({ error: error, msg: 'Something went wrong while updating' });
  }
};


const deleteTodo = async( req, res) => {
	const { id } = req.params

  Todo.findByIdAndDelete(id).then(() => {
            console.log("Todo Deleted successfully in DB.....");
            res.send("Deleted successfully")
})
  .catch((error) => {console.log("Error while deleting todo:",error);
  res.send({ error: error, msg: "something went wrong while Deleting!!" });
  });
}


export {
  getTodos,
  savaTodo,
  updateTodo,
  deleteTodo
}