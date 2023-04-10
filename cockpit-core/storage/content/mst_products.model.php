<?php
 return [
  'name' => 'mst_products',
  'label' => 'mst_products',
  'info' => '',
  'type' => 'collection',
  'fields' => [
    0 => [
      'name' => 'product_name',
      'type' => 'text',
      'label' => 'product_name',
      'info' => '',
      'group' => '',
      'i18n' => false,
      'required' => true,
      'multiple' => false,
      'meta' => [
      ],
      'opts' => [
        'multiline' => false,
        'showCount' => true,
        'readonly' => false,
        'placeholder' => NULL,
        'minlength' => NULL,
        'maxlength' => NULL,
        'list' => NULL,
      ],
    ],
    1 => [
      'name' => 'product_image',
      'type' => 'text',
      'label' => 'product_image',
      'info' => '',
      'group' => '',
      'i18n' => false,
      'required' => false,
      'multiple' => false,
      'meta' => [
      ],
      'opts' => [
        'multiline' => false,
        'showCount' => true,
        'readonly' => false,
        'placeholder' => NULL,
        'minlength' => NULL,
        'maxlength' => NULL,
        'list' => NULL,
      ],
    ],
    2 => [
      'name' => 'product_price',
      'type' => 'number',
      'label' => 'product_price',
      'info' => '',
      'group' => '',
      'i18n' => false,
      'required' => true,
      'multiple' => false,
      'meta' => [
      ],
      'opts' => [
      ],
    ],
    3 => [
      'name' => 'is_sales',
      'type' => 'boolean',
      'label' => 'is_sales',
      'info' => '',
      'group' => '',
      'i18n' => false,
      'required' => true,
      'multiple' => false,
      'meta' => [
      ],
      'opts' => [
      ],
    ],
    4 => [
      'name' => 'description',
      'type' => 'wysiwyg',
      'label' => 'description',
      'info' => '',
      'group' => '',
      'i18n' => false,
      'required' => false,
      'multiple' => false,
      'meta' => [
      ],
      'opts' => [
      ],
    ],
  ],
  'preview' => [
  ],
  'group' => '',
  'meta' => NULL,
  '_created' => 1681109004,
  '_modified' => 1681109107,
  'color' => NULL,
  'revisions' => false,
];