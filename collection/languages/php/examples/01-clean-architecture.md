# PHP Examples: Clean Architecture & Modern Patterns

## ❌ Junior Mistake (BANNED)

**Anti-patterns explicitly shown here:**
- Missing `declare(strict_types=1);`
- Functions without specific return types.
- Using Fully Qualified Names (FQNs) inline rather than importing via `use`.
- Inline generic variable validation instead of an abstracted request layer.
- Throwing a generic base `\Exception`.

```php
<?php

function createUser($data) {
    if (!isset($data['email'])) {
        throw new \Exception("Bad input");
    }
    
    $user = new \App\Models\User();
    $user->email = $data['email'];
    $user->save();
    
    return $user;
}
```

---

## ✅ Senior Standard

**Best practices successfully achieved:**
- Strict typing declared at the very top.
- Clear namespaces and organized class imports (`use`).
- Thin logic extracted to dedicated `Action` classes.
- Strong scalar types on parameters and return signatures (`array $data`, `: User`).
- Throwing highly specific, declarative exceptions (`InvalidUserDataException`).

```php
<?php

declare(strict_types=1);

namespace App\Actions;

use App\Models\User;
use App\Exceptions\InvalidUserDataException;

class CreateUserAction
{
    public function execute(array $data): User
    {
        if (empty($data['email'])) {
            throw new InvalidUserDataException("Email is required.");
        }

        return User::create([
            'email' => $data['email'],
        ]);
    }
}
```
