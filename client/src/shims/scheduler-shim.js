// Import the real scheduler using a query to bypass the alias
import * as S from 'scheduler/index.js?actual';

// Re-export everything from the real scheduler so normal imports continue to work
export * from 'scheduler/index.js?actual';

// Provide compatibility exports expected by some libs (pure JS, no TS casts)
export const unstable_IdlePriority =
  (S.unstable_IdlePriority ?? S.IdlePriority ?? 5);

export const unstable_ImmediatePriority =
  (S.unstable_ImmediatePriority ?? S.ImmediatePriority ?? 1);

export const unstable_UserBlockingPriority =
  (S.unstable_UserBlockingPriority ?? S.UserBlockingPriority ?? 2);

export const unstable_NormalPriority =
  (S.unstable_NormalPriority ?? S.NormalPriority ?? 3);

export const unstable_LowPriority =
  (S.unstable_LowPriority ?? S.LowPriority ?? 4);

// Pass-through for scheduleCallback if needed in future
export const unstable_scheduleCallback =
  (S.unstable_scheduleCallback ?? S.scheduleCallback);
