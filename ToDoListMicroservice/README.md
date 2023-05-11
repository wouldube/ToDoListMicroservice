# ToDo List Microservice

TypeScript microservice that organizes to-do list tasks by their due date and list name.

## Communication Contract

This section explains how to install the microservice, how to request data, and how to receive data. A UML sequence diagram is also provided to show how requesting and receiving data work.

### How to Install

1. Clone the repository:
```bash
git clone https://github.com/wouldube/ToDoListMicroservice.git

```
2. Install the dependencies:
```bash
npm install
```

### How to Run the Microservice

Run the microservice with the following command:

```bash
npm start
```

### How to Request Data

To request data, send a POST request with a JSON array of to-do list objects to the `/organize` endpoint of the microservice.

For example, using Python:

```python
import requests

url = 'http://localhost:3000/organize'

to_do_list_data = [
    {
        "dueDate": "2023-05-12",
        "todoListName": "Work",
        "tasks": ["meeting", "presentation"]
    },
    {
        "dueDate": "2023-05-11",
        "todoListName": "Personal",
        "tasks": ["grocery shopping", "laundry"]
    }
]

response = requests.post(url, json=to_do_list_data)
```

You can also include an optional `sortDates` query parameter to sort the dates in descending order:

```python
response = requests.post(url + '?sortDates=true', json=to_do_list_data)
```

### How to Receive Data

The microservice will return the organized tasks as a JSON object.

For example, using Python:

```python
import requests

url = 'http://localhost:3000/organize'

to_do_list_data = [
    {
        "dueDate": "2023-05-12",
        "todoListName": "Work",
        "tasks": ["meeting", "presentation"]
    },
    {
        "dueDate": "2023-05-11",
        "todoListName": "Personal",
        "tasks": ["grocery shopping", "laundry"]
    }
]

response = requests.post(url, json=to_do_list_data)
organized_tasks = response.json()
print(organized_tasks)
```

To receive the organized tasks sorted by date in descending order, include the `sortDates` query parameter:

```python
response = requests.post(url + '?sortDates=true', json=to_do_list_data)
organized_tasks = response.json()
print(organized_tasks)
```

### UML Sequence Diagram

User                      Microservice
  |                            |
  |--- POST Request ---------->|
  |   (Unsorted ToDo Lists)    |
  |                            |
  |<-------- Sorting --------- |
  |                            |
  |<--- Response --------------|
  |   (Sorted ToDo Lists)      |
  |                            |
