<?php

namespace Lararole\Tests\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Lararole\Traits\HasRoles;

class User extends Model
{
    use HasRoles, SoftDeletes, Authorizable, Authenticatable;
}