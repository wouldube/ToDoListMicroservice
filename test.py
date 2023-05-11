import requests

url = 'http://localhost:3000/organize'

to_do_list_data = [
    {
        "dueDate": "2023-05-12",
        "todoListName": "Personal",
        "tasks": ["exercise", "cook dinner"]
    },
    {
        "dueDate": "2023-05-11",
        "todoListName": "Work",
        "tasks": ["finish report", "email client"]
    },
    {
        "dueDate": "2023-05-11",
        "todoListName": "Personal",
        "tasks": ["grocery shopping", "laundry"]
    },
    {
        "dueDate": "2023-05-15",
        "todoListName": "Work",
        "tasks": ["meeting", "presentation"]
    }
]

response = requests.post(url + '?sortDates=true', json=to_do_list_data)
organized_tasks = response.json()
print(organized_tasks)
