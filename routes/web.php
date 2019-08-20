<?php



Route::view('/{path?}', 'welcome')->where('path','.*')->name('react');
