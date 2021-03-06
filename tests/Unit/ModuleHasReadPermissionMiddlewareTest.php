<?php

namespace Lararole\Tests\Unit;

use Lararole\Models\Role;
use Lararole\Models\Module;
use Illuminate\Http\Request;
use Lararole\Tests\TestCase;
use Lararole\Tests\Models\User;
use Lararole\Tests\Helper\Helper;
use Lararole\Http\Middleware\ModuleHasReadPermission;

class ModuleHasReadPermissionMiddlewareTest extends TestCase
{
    protected $moduleHasReadPermission;

    public function setUp(): void
    {
        parent::setUp();

        $this->moduleHasReadPermission = new ModuleHasReadPermission();
    }

    public function testModuleHasReadPermissionUnauthenticated()
    {
        $this->artisan('migrate:modules');

        foreach (Module::all() as $module) {
            $this->assertEquals(Helper::runMiddleware($this->moduleHasReadPermission, $module->slug), 401);
        }
    }

    public function testModuleHasReadPermissionWithNoRole()
    {
        $this->artisan('migrate:modules');

        $user = User::create([
            'name' => 'Super Admin',
        ]);

        auth()->login($user);

        $this->assertEquals(Helper::runMiddleware($this->moduleHasReadPermission, 'product'), 302);
    }

    public function testModuleHasReadPermission()
    {
        $role = Role::create([
            'name' => 'Super Admin',
        ]);

        $this->artisan('migrate:modules');

        $modules[0]['module_id'] = Module::whereSlug('product')->first()->id;
        $modules[0]['permission'] = 'read';

        $request = new Request([
            'modules' => $modules,
        ]);

        $role->assignModules($request);

        $user = User::create([
            'name' => 'Super Admin',
        ]);

        $user->assignRoles([$role->id]);

        auth()->login($user);

        $this->assertEquals(Helper::runMiddleware($this->moduleHasReadPermission, 'product'), 200);
    }

    public function testModuleHasWritePermission()
    {
        $role = Role::create([
            'name' => 'Super Admin',
        ]);

        $this->artisan('migrate:modules');

        $modules[0]['module_id'] = Module::whereSlug('product')->first()->id;
        $modules[0]['permission'] = 'write';

        $request = new Request([
            'modules' => $modules,
        ]);

        $role->assignModules($request);

        $user = User::create([
            'name' => 'Super Admin',
        ]);

        $user->assignRoles([$role->id]);

        auth()->login($user);

        $this->assertEquals(Helper::runMiddleware($this->moduleHasReadPermission, 'product'), 200);
    }
}
