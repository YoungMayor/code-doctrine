# JavaScript Examples & Patterns

## Destructuring & Guard Clauses (Fail Fast)

**❌ Anti-Pattern (Deep nesting, unclear structure):**

```javascript
async function processUser(user) {
  if (user && user.profile) {
    if (user.profile.isActive) {
      const data = await fetchMetrics(user.id);
      return data;
    } else {
      throw new Error('User inactive');
    }
  }
  throw new Error('Invalid user');
}
```

**✅ Senior Pattern (Guard clauses, destructuring):**

```javascript
async function processUser(user) {
  if (!user?.profile) {
    throw new Error('Invalid user data provided');
  }

  const {
    id,
    profile: { isActive },
  } = user;

  if (!isActive) {
    throw new Error('Cannot process inactive user');
  }

  return await fetchMetrics(id);
}
```

## Immutability & Parameter Safety

**❌ Anti-Pattern (Mutation):**

```javascript
function applyDiscount(cart, discountPercentage) {
  cart.total = cart.total - cart.total * (discountPercentage / 100);
  cart.hasDiscount = true;
  return cart; // Mutated original reference!
}
```

**✅ Senior Pattern (Immutable clones):**

```javascript
function applyDiscount(cart, discountPercentage) {
  const discountAmount = cart.total * (discountPercentage / 100);

  return {
    ...cart,
    total: cart.total - discountAmount,
    hasDiscount: true,
  };
}
```

## Error Handling Wrapper

Rather than `try/catch` scattered everywhere, use a safe wrapper or standard
error boundaries.

```javascript
/**
 * Safely resolves an async function and catches errors returning a tuple
 * @returns {Promise<[Error, null] | [null, Data]>}
 */
export async function asyncWrapper(promise) {
  try {
    const data = await promise;
    return [null, data];
  } catch (error) {
    return [error, null];
  }
}

// Usage
const [error, user] = await asyncWrapper(fetchUser(id));
if (error) {
  logger.error('Failed to fetch user', { id, error });
  return Response.json({ error: 'User lookup failed' }, { status: 500 });
}
```
