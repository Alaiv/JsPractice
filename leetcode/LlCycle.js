var hasCycle = function(head) {
  if (!head || head.next === null) return false;

  let slow = head;
  let fast = head;

  while(fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow === fast) return true;
  }
  return false;
};