# Notification System Design

## Objective

Display the most relevant notifications to users by prioritizing them based on notification type and recency.

## Notification Priority

The notification types are prioritized as follows:

| Type      | Weight |
| --------- | ------ |
| Placement | 3      |
| Result    | 2      |
| Event     | 1      |

Higher-weight notifications are considered more important.

## Sorting Strategy

Notifications are sorted using two criteria:

1. Priority Weight (Descending)
2. Timestamp (Newest First)

Example:

Placement > Result > Event

For notifications of the same type, the most recent notification appears first.

## Algorithm

1. Fetch notifications from the Notification API.
2. Assign a weight based on notification type.
3. Sort notifications by:

   * Weight (Descending)
   * Timestamp (Descending)
4. Extract the top N notifications (default: 10).
5. Display the result to the user.

## Logging Middleware

A reusable logging middleware is implemented to capture application events.

Function Signature:

Log(stack, level, package, message)

The middleware sends logs to the provided evaluation logging API and is used throughout the application for:

* API requests
* API responses
* Error handling
* State updates
* User interactions

## Frontend Architecture

1. Fetch notifications from the API.
2. Process and sort notifications.
3. Display notifications to users.
4. Support filtering and pagination.
5. Maintain viewed/unviewed notification status.

## Handling New Notifications

Whenever new notifications are received:

1. Add them to the notification list.
2. Recalculate ordering.
3. Re-sort the collection.
4. Update the top N notifications.

This ensures the priority inbox always contains the most important and recent notifications.

## Time Complexity

Priority Assignment: O(n)

Sorting: O(n log n)

Top N Extraction: O(k)

Where:

* n = total notifications
* k = number of displayed priority notifications

Overall Complexity: O(n log n)
