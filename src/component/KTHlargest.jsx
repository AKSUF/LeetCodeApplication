import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];

      if (element <= parent) break;

      this.heap[parentIndex] = element;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  extractMax() {
    const max = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown(0);
    }

    return max;
  }

  sinkDown(index) {
    const length = this.heap.length;
    const element = this.heap[index];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }
}

const KthLargestElement = () => {
  const [nums, setNums] = useState("");
  const [k, setK] = useState("");
  const [result, setResult] = useState("");

  const findKthLargest = () => {
    const numArray = nums.split(",").map(Number);
    const maxHeap = new MaxHeap();

    numArray.forEach((num) => {
      maxHeap.insert(num);
      if (maxHeap.heap.length > k) {
        maxHeap.extractMax();
      }
    });

    setResult(`Kth largest element: ${maxHeap.heap[0]}`);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Find Kth Largest Element
      </Typography>
      <TextField
        label="Enter array (comma-separated)"
        variant="outlined"
        fullWidth
        value={nums}
        onChange={(e) => setNums(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Enter k"
        variant="outlined"
        fullWidth
        value={k}
        onChange={(e) => setK(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={findKthLargest}>
        Find Kth Largest
      </Button>
      <Typography variant="h6" style={{ marginTop: "16px" }}>
        {result}
      </Typography>
    </Container>
  );
};

export default KthLargestElement;
