import { memo, useMemo } from "react";
import Trash from "../../../../assets/trash.svg";
import useToDoContext from "../../../../hooks/useToDoContext";
import { NoContent } from "../NoContent";
import styles from "./index.module.css";

interface TodoListProps {
    onDelete: (id: string) => void;
    onChangeCheckbox: (id: string) => void;
}

const TodoList = ({ onDelete, onChangeCheckbox }: TodoListProps) => {
    const { taskListState } = useToDoContext();
    const isTaskListEmpty = useMemo<boolean>(
        () => taskListState.length === 0,
        [taskListState.length]
    );

    console.log("oi");

    return (
        <>
            {isTaskListEmpty ? (
                <NoContent />
            ) : (
                <section className={styles.section_container} aria-label="todo-list">
                    {taskListState.map((task, i) => (
                        <article
                            aria-label={`todo-list-${i}`}
                            key={task.id}
                            className={styles.content_container}
                        >
                            <input
                                aria-label={`todo-list-${i}-check`}
                                type="checkbox"
                                id={task.id}
                                onChange={() => onChangeCheckbox(task.id)}
                                defaultChecked={task.isDone}
                            />
                            <p
                                aria-label={`todo-list-${i}-desc`}
                                className={
                                    task.isDone
                                        ? styles.text_scratched
                                        : styles.text
                                }
                            >
                                {task.description}
                            </p>
                            <img
                                aria-label={`todo-list-${i}-delete`}
                                className={styles.img}
                                src={Trash}
                                alt="Ícone de lixeira"
                                onClick={() => onDelete(task.id)}
                            />
                        </article>
                    ))}
                </section>
            )}
        </>
    );
};

const MemoizedTodoList = memo(TodoList);

export { MemoizedTodoList };
