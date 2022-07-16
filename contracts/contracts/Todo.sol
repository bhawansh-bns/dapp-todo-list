pragma experimental ABIEncoderV2;

contract Todo {
    uint public todoCount = 1;

    struct TodoItem {
        uint id;
        string name;
        string description;
        string due_date;
        bool completed;
    }

    constructor() public {
        createTodo("Buy milk", "Buy milk for the family", "2020-01-01");
    }

    mapping (
        uint => TodoItem
    ) public todos;

    // constructor () public {
    //     todoCount = 0;
    // }

    function createTodo(string memory _name, string memory _description, string memory due_date) public {
        todos[todoCount] = TodoItem({
            id: todoCount,
            name: _name,
            description: _description,
            due_date: due_date,
            completed: false
        });
        todoCount++;
    }

    function getTodo(uint _id) public view returns (TodoItem memory) {
        return todos[_id];
    }

    function getAllTodos() public view returns (TodoItem[] memory) {
        TodoItem[] memory items = new TodoItem[](todoCount);
        for (uint i = 0; i < todoCount; i++) {
            items[i] = todos[i];
        }
        return items;
    }

    function updateTodo(uint _id, string memory _name, string memory _description, bool _completed) public {
        TodoItem memory item = todos[_id];
        item.name = _name;
        item.description = _description;
        item.completed = _completed;
        todos[_id] = item;
    }


}