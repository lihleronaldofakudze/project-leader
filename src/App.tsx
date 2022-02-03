import React, { useState } from "react";

//Models
import { Todo } from "./models/Todo";

//Icons
import { MdDeleteForever, MdOutlineDone } from "react-icons/md";

//Material UI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

const App: React.FC = () => {
  const [newTodo, setNewTodo] = useState<String>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addNewTodo = () => {
    if (newTodo) {
      setTodos([...todos, { id: Date.now(), todo: newTodo, isDone: false }]);
      setNewTodo("");
    }
  };
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        color="inherit"
        sx={{ my: 2, textAlign: "center", fontWeight: 900 }}
      >
        Project Leader
      </Typography>
      <Container maxWidth="sm">
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={10}>
            <TextField
              id="task"
              label="Enter required task"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={2} onClick={() => addNewTodo()}>
            <Button variant="contained" color="success">
              Save
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Grid container spacing={1} sx={{ my: 2 }}>
        <Grid item xs={6} sx={{ bgcolor: "orange", p: 2 }}>
          {todos &&
            todos.map((todo) => {
              if (!todo.isDone) {
                return (
                  <Paper sx={{ p: 2, mb: 2 }} key={todo.id}>
                    <Stack direction="row" alignItems="center">
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{ flex: 1, fontWeight: 900 }}
                      >
                        {todo.todo}
                      </Typography>
                      <IconButton aria-label="delete" onClick={() => {}}>
                        <MdDeleteForever />
                      </IconButton>
                      <IconButton aria-label="done" onClick={() => {}}>
                        <MdOutlineDone />
                      </IconButton>
                    </Stack>
                  </Paper>
                );
              } else {
                return null;
              }
            })}
        </Grid>
        <Grid item xs={6}>
          {todos &&
            todos.map((todo) => {
              if (todo.isDone) {
                return (
                  <Paper>
                    <Typography variant="body1" color="initial">
                      {todo.todo}
                    </Typography>
                  </Paper>
                );
              } else {
                return null;
              }
            })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
