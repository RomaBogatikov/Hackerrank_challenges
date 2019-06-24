'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const DoublyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
        this.prev = null;
    }
};

const DoublyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        let node = new DoublyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
        }

        this.tail = node;
    }
};

function printDoublyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

// Complete the reverse function below.

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */
function reverse(head) {
    // let element point at head
    let element = head;

    // while element is not the tail of a linked list
    while (element.next !== null) {
        // create a new node
        let newNode = new DoublyLinkedListNode(element.data);
        // let new node .next point at the previous element
        newNode.next = element.prev;
        // if current element is not the head of a linked list (otherwise, if its .prev is not pointing at null)
        if (element.prev !== null) {
            // access the element newNode.next is pointing at and set its .prev property to point at newNode
            newNode.next.prev = newNode;
        }

        // move 'element' to the next element in a linked list
        element = element.next;
        // link element to a newNode we created
        newNode.prev = element;
        // make element.prev point at newNode
        element.prev = newNode;
    }
    // element is at what will be a new head, make its .next point at a previous element
    element.next = element.prev;
    // and its .prev point at null
    element.prev = null;

    // head is element now
    head = element;
    return head;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const llistCount = parseInt(readLine(), 10);

        let llist = new DoublyLinkedList();

        for (let i = 0; i < llistCount; i++) {
            const llistItem = parseInt(readLine(), 10);
            llist.insertNode(llistItem);
        }

        let llist1 = reverse(llist.head);

        printDoublyLinkedList(llist1, " ", ws)
        ws.write("\n");
    }

    ws.end();
}
