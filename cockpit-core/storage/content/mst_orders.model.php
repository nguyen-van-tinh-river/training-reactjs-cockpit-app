<?php
 return [
  'name' => 'mst_orders',
  'label' => 'mst_orders',
  'info' => '',
  'type' => 'collection',
  'fields' => [
    0 => [
      'name' => 'order_shop',
      'type' => 'text',
      'label' => 'order_shop',
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
      'name' => 'customer_id',
      'type' => 'contentItemLink',
      'label' => 'customer_id',
      'info' => '',
      'group' => '',
      'i18n' => false,
      'required' => true,
      'multiple' => false,
      'meta' => [
      ],
      'opts' => [
        'filter' => NULL,
      ],
    ],
    2 => [
      'name' => 'total_price',
      'type' => 'number',
      'label' => 'total_price',
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
      'name' => 'payment_method',
      'type' => 'number',
      'label' => 'payment_method',
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
      'name' => 'ship_charge',
      'type' => 'number',
      'label' => 'ship_charge',
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
    5 => [
      'name' => 'tax',
      'type' => 'number',
      'label' => 'tax',
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
    6 => [
      'name' => 'order_date',
      'type' => 'datetime',
      'label' => 'order_date',
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
    7 => [
      'name' => 'shipment_date',
      'type' => 'datetime',
      'label' => 'shipment_date',
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
    8 => [
      'name' => 'cancel_date',
      'type' => 'datetime',
      'label' => 'cancel_date',
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
    9 => [
      'name' => 'order_status',
      'type' => 'number',
      'label' => 'order_status',
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
    10 => [
      'name' => 'note_customer',
      'type' => 'wysiwyg',
      'label' => 'note_customer',
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
    11 => [
      'name' => 'error_code_api',
      'type' => 'text',
      'label' => 'error_code_api',
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
  ],
  'preview' => [
  ],
  'group' => '',
  'meta' => NULL,
  '_created' => 1681109244,
  '_modified' => 1681109749,
  'color' => NULL,
  'revisions' => false,
];