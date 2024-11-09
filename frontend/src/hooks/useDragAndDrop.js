// src/hooks/useDragAndDrop.js
import { useState } from 'react';

export function useDragAndDrop() {
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (event, itemId) => {
    setDraggedItem(itemId);
  };

  const handleDrop = (event, targetId) => {
    event.preventDefault();
    // Implement iframe embedding logic based on `draggedItem` and `targetId`
  };

  return {
    handleDragStart,
    handleDrop,
  };
}
