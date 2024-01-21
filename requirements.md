# Program Requirements

## Introduction

Programmers and engineers have a lot to remember.  Keeping up with things like IP addresses, birthdays, and to-do lists require them to consume incremental amounts of mental energy that, collectively, could be used to solve more complex and pressing problems.

The purpose of this assignment is to produce a software application called `kv` that allows the user to store key/value pairs so that they do not have to remember things. 

## Functional Requirements

- The application shall be a console application that can be installed on a user's computer.

- The application shall be invoked from a command line by typing `kv`

- A key shall identify one or more values

### Displaying Values for a Key

- When the user types `kv` with no input arguments, usage instructions shall be displayed.

- The user shall be able to show a set of values for a given key.

    - The syntax for showing a key/value pair shall be as follows:
    
        ```kv <key>```

- The format of the ouptut message shall be as follows:

    ```<key> -> <value> , <value>*```
    
- If no value exists for that key, the application shall return the following error message:

    ```No value exists for the given key```.

- When the user types `kv` followed by a key and value, the application shall store the supplied value with the specified key. 

- The syntax for storing a value under a specified key shall be as follows:

    ```kv <key> <value>```

- If the value is stored sucessfully, the application shall display the following confirmation message: 
    
    ```Value stored successfully.```

    - If the specified key already exists, then the following error message shall be displayed:
    
        ```The specified key already exists.  If you want to add a new value to this key, use the --append option.```

### <code>append</code> Option

The user shall be able to type `kv` followed by the `--append` option in order to append a new value to an existing key. The key and value shall follow the `--append` option.

- The syntax of the `--append` function shall be as follows:

    ```kv --append <key> <value>```

    - If the specified key does not exist, then a new key/value pair shall be stored and a successful confirmation message shall be displayed.

- If the supplied value already exists for the given key, then the following error message shall be displayed:

    ```The value for the given key already exists.```

### <code>delete</code> Option

The user shall be able to type `kv` followed by a `--delete` option in order to delete a set of key/value pairs from the store.

- The syntax of  the `--delete` option shall be as follows:

    ```kv --delete <key>```

- If the specified key exists, then the following success confirmation message shall be displayed:

    ```Key/value successfully deleted```

- If the specified key does not exist, then the following error message shall be displayed:

    ```Key does not exist```


### <code>keys</code> Function

The user shall be able to type `kv` followed by a `--keys` option in order to list all the keys in the store. 

- The syntax of the `--keys` option shall be as follows:

    ```kv --keys```

- When the `--keys` option is used, a list of all keys in the store shall be displayed, with each key being displayed on a new line

- If no keys are present in the store, then the following error message shall be displayed:

    ```No keys found```

### <code>list</code> Option

The user shall be able to type `kv` followd by a `--list` option in order to list all the key/value pairs in the store.

- The syntax of the `--list` option shall be as follows:

    ```key --list```

- When the `--list` option is used, a list of all key/value pairs in the store shall be displayed, with each key/value pair being shown on a new line.

- If there is more than one value for a key, then the list of values for that key shall be separated by a comma followed by a space.





## Non-Functional Requirements

- The application shall be written in either Javascript or Typescript

- The application shall target the NodeJS runtime

- The application shall be stored in a public Github repository and shall require pull requests for merging back into the main branch.

- The application shall be developed using Visual Studio Code

- Data shall be stored using a MongoDB data store.
    - Optionally, the system shall require MongoDB to be run in a Docker container

- The code repository shall contain a `readme.md` file that describes how to:
    - Build the code
    - Install the application
    - Run the application