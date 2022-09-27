var data = {
  manifest: {
    schema: true,
    data: true,
    base: {
      objectName: "SalesOrderLines",
      pagination: {
        currentPage: 1,
        pageSize: 37,
        totalPages: 1,
      },
      totalRecords: 37,
      orderBy: [],
    },
    includes: [],
  },
  schema: {
    SalesOrderLines: {
      uuid: "c72ea4ec-a802-4c87-a61c-fdb0cb28a630",
      objectName: "SalesOrderLines",
      isInterface: false,
      type: "Entity",
      interfaces: {
        RecordEssentials: [
          {
            field: "ID",
            dataType: "Text",
          },
          {
            field: "Name",
            dataType: "Text",
          },
        ],
      },
      fields: [
        {
          objectName: "LineNumber",
          dataType: "Numeric",
          heading: "Line Number",
          headingTranslated: "Line Number",
          required: true,
          properties: {
            scale: 0,
            precision: 10,
            InterfaceMap: {
              RecordEssentials: [
                {
                  field: "Name",
                },
                {
                  field: "ID",
                },
              ],
            },
          },
        },
        {
          objectName: "SalesOrder",
          dataType: "Relationship",
          heading: "Sales Order",
          headingTranslated: "Sales Order",
          required: true,
          properties: {
            Cardinality: "N:1",
            Multiplexity: false,
            Relationships: [
              {
                entityObjectName: "SalesOrders",
                relationshipObjectName:
                  "SalesOrderLines_SalesOrder_SalesOrders",
                implementedInterfaces: [
                  {
                    interface: "RecordEssentials",
                    implementedFields: ["ID", "Name"],
                  },
                ],
              },
            ],
          },
        },
        {
          objectName: "Product",
          dataType: "Relationship",
          heading: "Product",
          headingTranslated: "Product",
          required: true,
          properties: {
            Cardinality: "N:1",
            Multiplexity: false,
            Relationships: [
              {
                entityObjectName: "Products",
                relationshipObjectName: "SalesOrderLines_Product_Products",
                implementedInterfaces: [
                  {
                    interface: "RecordEssentials",
                    implementedFields: ["ID", "Name"],
                  },
                ],
              },
            ],
          },
        },
        {
          objectName: "Quantity",
          dataType: "Numeric",
          heading: "Quantity",
          headingTranslated: "Quantity",
          required: true,
          properties: {
            scale: 5,
            precision: 10,
          },
        },
        {
          objectName: "PricePerUnit",
          dataType: "Numeric",
          heading: "Unit Price",
          headingTranslated: "Unit Price",
          required: true,
          properties: {
            scale: 0,
            precision: 10,
          },
        },
        {
          objectName: "PriceTotal",
          dataType: "Numeric",
          heading: "Total Price",
          headingTranslated: "Total Price",
          required: true,
          properties: {
            scale: 0,
            precision: 10,
          },
        },
        {
          objectName: "TaxTotal",
          dataType: "Numeric",
          heading: "Total Tax",
          headingTranslated: "Total Tax",
          required: true,
          properties: {
            scale: 5,
            precision: 10,
          },
        },
        {
          objectName: "PriceCurrency",
          dataType: "Relationship",
          heading: "Currency",
          headingTranslated: "Currency",
          required: true,
          properties: {
            Cardinality: "N:1",
            Multiplexity: false,
            Relationships: [
              {
                entityObjectName: "Currencies",
                relationshipObjectName:
                  "SalesOrderLines_PriceCurrency_Currencies",
                implementedInterfaces: [
                  {
                    interface: "RecordEssentials",
                    implementedFields: ["ID", "Name"],
                  },
                ],
              },
            ],
          },
        },
        {
          objectName: "CostTotal",
          dataType: "Numeric",
          heading: "Total Cost",
          headingTranslated: "Total Cost",
          required: false,
          properties: {
            scale: 0,
            precision: 10,
          },
        },
        {
          objectName: "CostCurrency",
          dataType: "Relationship",
          heading: "Currency",
          headingTranslated: "Currency",
          required: false,
          properties: {
            Cardinality: "N:1",
            Multiplexity: false,
            Relationships: [
              {
                entityObjectName: "Currencies",
                relationshipObjectName:
                  "SalesOrderLines_CostCurrency_Currencies",
                implementedInterfaces: [
                  {
                    interface: "RecordEssentials",
                    implementedFields: ["ID", "Name"],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  },
  data: {
    SalesOrderLines: [
      {
        uuid: "161411b3-3f61-44f0-a4c6-000225e135d5",
        versionUuid: "f7a64e4d-ec2d-4871-a4f2-1839c2a05300",
        fields: {
          LineNumber: 222222222,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "6f7f1d6f-9a51-4403-bdb5-3d5818a5bf1e",
              orderIndex: 1,
              id: "1001",
              name: "First Purchase",
              interfaceData: {
                RecordEssentials: {
                  ID: "1001",
                  Name: "First Purchase",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "3a70991d-687d-4d8c-972e-b04b7246ba83",
              orderIndex: 1,
              id: "Test",
              name: "Test Product",
              interfaceData: {
                RecordEssentials: {
                  ID: "Test",
                  Name: "Test Product",
                },
              },
            },
          ],
          Quantity: 2,
          PricePerUnit: 12,
          PriceTotal: 24,
          TaxTotal: 2,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 111,
          CostCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
        },
      },
      {
        uuid: "00b0ba53-b0b5-48b1-b58b-04219283d307",
        versionUuid: "87259765-ed59-4d02-8eef-43561add1713",
        fields: {
          LineNumber: 2,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "b0107f3f-8377-4be0-b6b1-12d3d05a4574",
              orderIndex: 1,
              id: "1002",
              name: "Sales Order 001",
              interfaceData: {
                RecordEssentials: {
                  ID: "1002",
                  Name: "Sales Order 001",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "3a70991d-687d-4d8c-972e-b04b7246ba83",
              orderIndex: 1,
              id: "Test",
              name: "Test Product",
              interfaceData: {
                RecordEssentials: {
                  ID: "Test",
                  Name: "Test Product",
                },
              },
            },
          ],
          Quantity: 1,
          PricePerUnit: 1,
          PriceTotal: 1,
          TaxTotal: 1,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 1,
          CostCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
        },
      },
      {
        uuid: "577c0176-defd-4b0c-ade1-05deb7804711",
        versionUuid: "e81524d2-597e-4c4f-9769-9b64b12d8c5d",
        fields: {
          LineNumber: 12345,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "ce707ee7-2fb4-423d-a5a9-fb96cd4170e4",
              orderIndex: 1,
              id: "1006",
              name: "Test Svetla",
              interfaceData: {
                RecordEssentials: {
                  ID: "1006",
                  Name: "Test Svetla",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "0f5daef8-7a8a-40af-b134-48a58055be97",
              orderIndex: 1,
              id: "001",
              name: "Product 001",
              interfaceData: {
                RecordEssentials: {
                  ID: "001",
                  Name: "Product 001",
                },
              },
            },
          ],
          Quantity: 5,
          PricePerUnit: 5,
          PriceTotal: 5,
          TaxTotal: 5,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "acec7b3e-d87e-4837-95a1-a591c9b9bccb",
              orderIndex: 1,
              id: "BSD",
              name: "BSD",
              interfaceData: {
                RecordEssentials: {
                  ID: "BSD",
                  Name: "BSD",
                },
              },
            },
          ],
          CostTotal: 5000,
          CostCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "bfcb7aae-bc88-4e53-82e5-71f0bb156a3d",
              orderIndex: 1,
              id: "BDT",
              name: "BDT",
              interfaceData: {
                RecordEssentials: {
                  ID: "BDT",
                  Name: "BDT",
                },
              },
            },
          ],
        },
      },
      {
        uuid: "79a68933-8a67-49a1-ab72-0aee506c2e1e",
        versionUuid: "64f41111-5a01-496d-8ffb-6ff1c355225e",
        fields: {
          LineNumber: 7863,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "26b2a39d-adfd-4a70-bc6b-4d5247f368f4",
              orderIndex: 1,
              id: "1014",
              name: "Sale Order 03",
              interfaceData: {
                RecordEssentials: {
                  ID: "1014",
                  Name: "Sale Order 03",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "ae1609cf-fc48-468a-a9c0-3dacff72a657",
              orderIndex: 1,
              id: "NPE",
              name: "New Product example",
              interfaceData: {
                RecordEssentials: {
                  ID: "NPE",
                  Name: "New Product example",
                },
              },
            },
          ],
          Quantity: 4,
          PricePerUnit: 5,
          PriceTotal: 20,
          TaxTotal: 2,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
      {
        uuid: "c07e82a9-0be1-420c-9485-164678c25232",
        versionUuid: "8f0cc402-3e2a-4967-9c23-e79f5de1b8a0",
        fields: {
          LineNumber: 1,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "b0107f3f-8377-4be0-b6b1-12d3d05a4574",
              orderIndex: 1,
              id: "1002",
              name: "Sales Order 001",
              interfaceData: {
                RecordEssentials: {
                  ID: "1002",
                  Name: "Sales Order 001",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "3a70991d-687d-4d8c-972e-b04b7246ba83",
              orderIndex: 1,
              id: "Test",
              name: "Test Product",
              interfaceData: {
                RecordEssentials: {
                  ID: "Test",
                  Name: "Test Product",
                },
              },
            },
          ],
          Quantity: 11,
          PricePerUnit: 13,
          PriceTotal: 133,
          TaxTotal: 13,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 20,
          CostCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
        },
      },
      {
        uuid: "7058623d-09be-41d8-a40b-1cd5568eaba5",
        versionUuid: "edc76ada-165d-46ab-b17f-9c6e5b2b2156",
        fields: {
          LineNumber: 1714,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "3ddb2e36-66df-42e9-8412-57ac77c1eefa",
              orderIndex: 1,
              id: "1009",
              name: "Sales Order 14",
              interfaceData: {
                RecordEssentials: {
                  ID: "1009",
                  Name: "Sales Order 14",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "1315f5e1-8fb0-4862-a81c-861fdfdf5d8a",
              orderIndex: 1,
              id: "003",
              name: "product 003",
              interfaceData: {
                RecordEssentials: {
                  ID: "003",
                  Name: "product 003",
                },
              },
            },
          ],
          Quantity: 10,
          PricePerUnit: 6,
          PriceTotal: 60,
          TaxTotal: 10,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
      {
        uuid: "ff02e599-4509-4f4a-ac6d-1e2c1b4c6fc3",
        versionUuid: "98dc31e3-40a7-4940-8bdf-10c72b25fc71",
        fields: {
          LineNumber: 18765,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "d4a40829-947a-4f95-9fe9-7337e0bc5f44",
              orderIndex: 1,
              id: "1012",
              name: "Sales Order",
              interfaceData: {
                RecordEssentials: {
                  ID: "1012",
                  Name: "Sales Order",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "3a70991d-687d-4d8c-972e-b04b7246ba83",
              orderIndex: 1,
              id: "Test",
              name: "Test Product",
              interfaceData: {
                RecordEssentials: {
                  ID: "Test",
                  Name: "Test Product",
                },
              },
            },
          ],
          Quantity: 5,
          PricePerUnit: 2,
          PriceTotal: 10,
          TaxTotal: 3,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
      {
        uuid: "61230697-515d-46c1-95d9-21fc43dcb666",
        versionUuid: "fccf53f6-291c-4a44-92c1-43bd7c27ed49",
        fields: {
          LineNumber: 6541,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "4cb49737-70ae-4472-9fdd-7aea0b7a4d1f",
              orderIndex: 1,
              id: "1010",
              name: "Sales Order 17",
              interfaceData: {
                RecordEssentials: {
                  ID: "1010",
                  Name: "Sales Order 17",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "3a70991d-687d-4d8c-972e-b04b7246ba83",
              orderIndex: 1,
              id: "Test",
              name: "Test Product",
              interfaceData: {
                RecordEssentials: {
                  ID: "Test",
                  Name: "Test Product",
                },
              },
            },
          ],
          Quantity: 3,
          PricePerUnit: 3,
          PriceTotal: 6,
          TaxTotal: 4,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
      {
        uuid: "65318d4f-921f-4e17-b829-326a8c8086b2",
        versionUuid: "3ae3e460-7fe6-4e1b-a57b-b82b34dbd4e3",
        fields: {
          LineNumber: 76432,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "73cbe6fc-2166-4cf7-8d5d-92777b8af55b",
              orderIndex: 1,
              id: "1007",
              name: "Sales Order 01",
              interfaceData: {
                RecordEssentials: {
                  ID: "1007",
                  Name: "Sales Order 01",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "1315f5e1-8fb0-4862-a81c-861fdfdf5d8a",
              orderIndex: 1,
              id: "003",
              name: "product 003",
              interfaceData: {
                RecordEssentials: {
                  ID: "003",
                  Name: "product 003",
                },
              },
            },
          ],
          Quantity: 13,
          PricePerUnit: 2,
          PriceTotal: 26,
          TaxTotal: 4,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
      {
        uuid: "75338d6d-4198-4d15-84b6-3597a5787f72",
        versionUuid: "f4fce84b-5f27-4d8d-83ef-5af422749fea",
        fields: {
          LineNumber: 4,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "968a8284-3f2d-4a72-aa74-b36a6beaabad",
              orderIndex: 1,
              id: "1000",
              name: "Test",
              interfaceData: {
                RecordEssentials: {
                  ID: "1000",
                  Name: "Test",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "3a70991d-687d-4d8c-972e-b04b7246ba83",
              orderIndex: 1,
              id: "Test",
              name: "Test Product",
              interfaceData: {
                RecordEssentials: {
                  ID: "Test",
                  Name: "Test Product",
                },
              },
            },
          ],
          Quantity: 5,
          PricePerUnit: 5,
          PriceTotal: 5,
          TaxTotal: 5,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "a032c54f-9b7e-4300-992a-2e4197a2eb31",
              orderIndex: 1,
              id: "BBD",
              name: "BBD",
              interfaceData: {
                RecordEssentials: {
                  ID: "BBD",
                  Name: "BBD",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
      {
        uuid: "0db535cc-3f43-4cc4-acab-50a5a5ec0b77",
        versionUuid: "79fee1e8-0fc2-4881-b397-54eadb2cfdc7",
        fields: {
          LineNumber: 1997,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "4cb49737-70ae-4472-9fdd-7aea0b7a4d1f",
              orderIndex: 1,
              id: "1010",
              name: "Sales Order 17",
              interfaceData: {
                RecordEssentials: {
                  ID: "1010",
                  Name: "Sales Order 17",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "0f5daef8-7a8a-40af-b134-48a58055be97",
              orderIndex: 1,
              id: "001",
              name: "Product 001",
              interfaceData: {
                RecordEssentials: {
                  ID: "001",
                  Name: "Product 001",
                },
              },
            },
          ],
          Quantity: 7,
          PricePerUnit: 2,
          PriceTotal: 14,
          TaxTotal: 3,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
      {
        uuid: "0735f10c-230c-4c9c-b7d1-52ca0f6b94c9",
        versionUuid: "fa36b003-0f0b-4115-8202-75c8d7d2a67d",
        fields: {
          LineNumber: 1360,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "d516d573-1823-44f7-8dbd-4704fd42dc98",
              orderIndex: 1,
              id: "1011",
              name: "Sales Order 12",
              interfaceData: {
                RecordEssentials: {
                  ID: "1011",
                  Name: "Sales Order 12",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "62fe474c-c6de-4962-976a-0b12c13d0d22",
              orderIndex: 1,
              id: "МСП",
              name: "мой си продукт",
              interfaceData: {
                RecordEssentials: {
                  ID: "МСП",
                  Name: "мой си продукт",
                },
              },
            },
          ],
          Quantity: 47,
          PricePerUnit: 1,
          PriceTotal: 47,
          TaxTotal: 6,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
      {
        uuid: "dd9aea1c-24d1-48e8-9f7a-5bde4a37df99",
        versionUuid: "7cd94ff1-dae9-460d-8886-f256bb5ebdf0",
        fields: {
          LineNumber: 1414,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "73cbe6fc-2166-4cf7-8d5d-92777b8af55b",
              orderIndex: 1,
              id: "1007",
              name: "Sales Order 01",
              interfaceData: {
                RecordEssentials: {
                  ID: "1007",
                  Name: "Sales Order 01",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "62fe474c-c6de-4962-976a-0b12c13d0d22",
              orderIndex: 1,
              id: "МСП",
              name: "мой си продукт",
              interfaceData: {
                RecordEssentials: {
                  ID: "МСП",
                  Name: "мой си продукт",
                },
              },
            },
          ],
          Quantity: 3,
          PricePerUnit: 2,
          PriceTotal: 6,
          TaxTotal: 3,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
      {
        uuid: "8a77538c-bdca-435e-a88a-5d17192f3d6d",
        versionUuid: "63378f67-9276-49cd-8599-108170b842cb",
        fields: {
          LineNumber: 474536,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "d516d573-1823-44f7-8dbd-4704fd42dc98",
              orderIndex: 1,
              id: "1011",
              name: "Sales Order 12",
              interfaceData: {
                RecordEssentials: {
                  ID: "1011",
                  Name: "Sales Order 12",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "86fda20d-ba2e-4e79-a984-46b73fbf1bfa",
              orderIndex: 1,
              id: "NP2",
              name: "New Product 2",
              interfaceData: {
                RecordEssentials: {
                  ID: "NP2",
                  Name: "New Product 2",
                },
              },
            },
          ],
          Quantity: 12,
          PricePerUnit: 2,
          PriceTotal: 24,
          TaxTotal: 6,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
      {
        uuid: "d5ed5319-ea3e-4165-b8c5-675d9bdec088",
        versionUuid: "ae5a2cba-0d67-4c8d-8c0b-518afcf8c505",
        fields: {
          LineNumber: 1515,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "6e4fa395-ea20-4374-a502-cc630a25a5fa",
              orderIndex: 1,
              id: "1008",
              name: "Sales Order 02",
              interfaceData: {
                RecordEssentials: {
                  ID: "1008",
                  Name: "Sales Order 02",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "0f5daef8-7a8a-40af-b134-48a58055be97",
              orderIndex: 1,
              id: "001",
              name: "Product 001",
              interfaceData: {
                RecordEssentials: {
                  ID: "001",
                  Name: "Product 001",
                },
              },
            },
          ],
          Quantity: 9,
          PricePerUnit: 6,
          PriceTotal: 14,
          TaxTotal: 4,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
      {
        uuid: "4139925c-e5ec-45f0-b2af-6d330011b938",
        versionUuid: "ce6af6e3-ae78-4b95-b696-a69aa2ab0511",
        fields: {
          LineNumber: 1771,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "6e4fa395-ea20-4374-a502-cc630a25a5fa",
              orderIndex: 1,
              id: "1008",
              name: "Sales Order 02",
              interfaceData: {
                RecordEssentials: {
                  ID: "1008",
                  Name: "Sales Order 02",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "ae1609cf-fc48-468a-a9c0-3dacff72a657",
              orderIndex: 1,
              id: "NPE",
              name: "New Product example",
              interfaceData: {
                RecordEssentials: {
                  ID: "NPE",
                  Name: "New Product example",
                },
              },
            },
          ],
          Quantity: 7,
          PricePerUnit: 6,
          PriceTotal: 10,
          TaxTotal: 3,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
      {
        uuid: "41a99feb-3ced-4693-8c35-8d1a509888ba",
        versionUuid: "1586883d-c26e-4706-bc7e-67cd46662ebf",
        fields: {
          LineNumber: 1741,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "3ddb2e36-66df-42e9-8412-57ac77c1eefa",
              orderIndex: 1,
              id: "1009",
              name: "Sales Order 14",
              interfaceData: {
                RecordEssentials: {
                  ID: "1009",
                  Name: "Sales Order 14",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "62fe474c-c6de-4962-976a-0b12c13d0d22",
              orderIndex: 1,
              id: "МСП",
              name: "мой си продукт",
              interfaceData: {
                RecordEssentials: {
                  ID: "МСП",
                  Name: "мой си продукт",
                },
              },
            },
          ],
          Quantity: 6,
          PricePerUnit: 5,
          PriceTotal: 30,
          TaxTotal: 4,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
      {
        uuid: "f9fb286a-62bd-4be9-bd43-8d701c0e7fde",
        versionUuid: "dc97ab1b-8fbc-4cff-a592-ad983e0555eb",
        fields: {
          LineNumber: 4469,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "3ddb2e36-66df-42e9-8412-57ac77c1eefa",
              orderIndex: 1,
              id: "1009",
              name: "Sales Order 14",
              interfaceData: {
                RecordEssentials: {
                  ID: "1009",
                  Name: "Sales Order 14",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "86fda20d-ba2e-4e79-a984-46b73fbf1bfa",
              orderIndex: 1,
              id: "NP2",
              name: "New Product 2",
              interfaceData: {
                RecordEssentials: {
                  ID: "NP2",
                  Name: "New Product 2",
                },
              },
            },
          ],
          Quantity: 1,
          PricePerUnit: 6,
          PriceTotal: 6,
          TaxTotal: 4,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
      {
        uuid: "283982a7-c8ec-4ecd-a648-8f9e3ef681ec",
        versionUuid: "a6037da6-9fbd-4ac8-8c86-9a812a41ba0d",
        fields: {
          LineNumber: 2453,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "26b2a39d-adfd-4a70-bc6b-4d5247f368f4",
              orderIndex: 1,
              id: "1014",
              name: "Sale Order 03",
              interfaceData: {
                RecordEssentials: {
                  ID: "1014",
                  Name: "Sale Order 03",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "0f5daef8-7a8a-40af-b134-48a58055be97",
              orderIndex: 1,
              id: "001",
              name: "Product 001",
              interfaceData: {
                RecordEssentials: {
                  ID: "001",
                  Name: "Product 001",
                },
              },
            },
          ],
          Quantity: 7,
          PricePerUnit: 6,
          PriceTotal: 42,
          TaxTotal: 6,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
      {
        uuid: "2bda12a2-8998-4936-861b-9895d7c4f620",
        versionUuid: "4bd1484a-56ac-4d38-99d2-44a316189b6c",
        fields: {
          LineNumber: 11036,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "d4a40829-947a-4f95-9fe9-7337e0bc5f44",
              orderIndex: 1,
              id: "1012",
              name: "Sales Order",
              interfaceData: {
                RecordEssentials: {
                  ID: "1012",
                  Name: "Sales Order",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "62fe474c-c6de-4962-976a-0b12c13d0d22",
              orderIndex: 1,
              id: "МСП",
              name: "мой си продукт",
              interfaceData: {
                RecordEssentials: {
                  ID: "МСП",
                  Name: "мой си продукт",
                },
              },
            },
          ],
          Quantity: 1,
          PricePerUnit: 6,
          PriceTotal: 6,
          TaxTotal: 2,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
      {
        uuid: "b3d79560-c7d4-4b7e-ab40-9c9017438d1b",
        versionUuid: "196bc3fe-5810-4efb-a096-6c6a7be4d831",
        fields: {
          LineNumber: 4497,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "d4a40829-947a-4f95-9fe9-7337e0bc5f44",
              orderIndex: 1,
              id: "1012",
              name: "Sales Order",
              interfaceData: {
                RecordEssentials: {
                  ID: "1012",
                  Name: "Sales Order",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "1315f5e1-8fb0-4862-a81c-861fdfdf5d8a",
              orderIndex: 1,
              id: "003",
              name: "product 003",
              interfaceData: {
                RecordEssentials: {
                  ID: "003",
                  Name: "product 003",
                },
              },
            },
          ],
          Quantity: 6,
          PricePerUnit: 7,
          PriceTotal: 42,
          TaxTotal: 10,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
      {
        uuid: "4b25aec6-cfab-4f82-b8fb-a1bbe8bb9c91",
        versionUuid: "e98fbcee-7d98-4a19-976b-38f0f8cee26e",
        fields: {
          LineNumber: 2432,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "d516d573-1823-44f7-8dbd-4704fd42dc98",
              orderIndex: 1,
              id: "1011",
              name: "Sales Order 12",
              interfaceData: {
                RecordEssentials: {
                  ID: "1011",
                  Name: "Sales Order 12",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "1315f5e1-8fb0-4862-a81c-861fdfdf5d8a",
              orderIndex: 1,
              id: "003",
              name: "product 003",
              interfaceData: {
                RecordEssentials: {
                  ID: "003",
                  Name: "product 003",
                },
              },
            },
          ],
          Quantity: 13,
          PricePerUnit: 4,
          PriceTotal: 52,
          TaxTotal: 6,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
      {
        uuid: "0cc10dd8-0079-4d4b-a788-a5ab185bd4dd",
        versionUuid: "147d384f-1291-49be-ab28-df1830877cb3",
        fields: {
          LineNumber: 9214,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "4d244d3c-77cd-4f80-aab5-26f71410e254",
              orderIndex: 1,
              id: "1013",
              name: "Sales Order 11",
              interfaceData: {
                RecordEssentials: {
                  ID: "1013",
                  Name: "Sales Order 11",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "62fe474c-c6de-4962-976a-0b12c13d0d22",
              orderIndex: 1,
              id: "МСП",
              name: "мой си продукт",
              interfaceData: {
                RecordEssentials: {
                  ID: "МСП",
                  Name: "мой си продукт",
                },
              },
            },
          ],
          Quantity: 17,
          PricePerUnit: 3,
          PriceTotal: 51,
          TaxTotal: 3,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
      {
        uuid: "e7548bf8-6d89-44f7-b397-a5b22cb48a19",
        versionUuid: "547116d3-18d2-4793-86bd-fc8fbc746f9c",
        fields: {
          LineNumber: 1,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "d24f4516-0504-4410-8197-2f94edd9398a",
              orderIndex: 1,
              id: "1005",
              name: "Creative Toys 2022 - 2 visit types",
              interfaceData: {
                RecordEssentials: {
                  ID: "1005",
                  Name: "Creative Toys 2022 - 2 visit types",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "3a70991d-687d-4d8c-972e-b04b7246ba83",
              orderIndex: 1,
              id: "Test",
              name: "Test Product",
              interfaceData: {
                RecordEssentials: {
                  ID: "Test",
                  Name: "Test Product",
                },
              },
            },
          ],
          Quantity: 10,
          PricePerUnit: 0,
          PriceTotal: 0,
          TaxTotal: 0,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
      {
        uuid: "15267e46-2ead-489a-bea7-ab6641bbb378",
        versionUuid: "b30d38af-16b3-4165-bea4-a0ce02fd712b",
        fields: {
          LineNumber: 1000101001,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "f167dde6-0718-4432-97db-94e04bc1c788",
              orderIndex: 1,
              id: "1015",
              name: "COMMANDS SO 1",
              interfaceData: {
                RecordEssentials: {
                  ID: "1015",
                  Name: "COMMANDS SO 1",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "86fda20d-ba2e-4e79-a984-46b73fbf1bfa",
              orderIndex: 1,
              id: "NP2",
              name: "New Product 2",
              interfaceData: {
                RecordEssentials: {
                  ID: "NP2",
                  Name: "New Product 2",
                },
              },
            },
          ],
          Quantity: 1,
          PricePerUnit: 1,
          PriceTotal: 1,
          TaxTotal: 1,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 1,
          CostCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
        },
      },
      {
        uuid: "328b6420-9190-4667-988f-abd5996c4140",
        versionUuid: "5e7d505a-a06a-4f18-8c69-1ba062f0dd8e",
        fields: {
          LineNumber: 1045,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "26b2a39d-adfd-4a70-bc6b-4d5247f368f4",
              orderIndex: 1,
              id: "1014",
              name: "Sale Order 03",
              interfaceData: {
                RecordEssentials: {
                  ID: "1014",
                  Name: "Sale Order 03",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "62fe474c-c6de-4962-976a-0b12c13d0d22",
              orderIndex: 1,
              id: "МСП",
              name: "мой си продукт",
              interfaceData: {
                RecordEssentials: {
                  ID: "МСП",
                  Name: "мой си продукт",
                },
              },
            },
          ],
          Quantity: 3,
          PricePerUnit: 6,
          PriceTotal: 18,
          TaxTotal: 2,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
      {
        uuid: "0777195f-6187-4f01-820f-af58553a9c5a",
        versionUuid: "d777f722-7096-4a5e-b20d-24b08b262659",
        fields: {
          LineNumber: 17654,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "4d244d3c-77cd-4f80-aab5-26f71410e254",
              orderIndex: 1,
              id: "1013",
              name: "Sales Order 11",
              interfaceData: {
                RecordEssentials: {
                  ID: "1013",
                  Name: "Sales Order 11",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "1315f5e1-8fb0-4862-a81c-861fdfdf5d8a",
              orderIndex: 1,
              id: "003",
              name: "product 003",
              interfaceData: {
                RecordEssentials: {
                  ID: "003",
                  Name: "product 003",
                },
              },
            },
          ],
          Quantity: 2,
          PricePerUnit: 7,
          PriceTotal: 14,
          TaxTotal: 6,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
      {
        uuid: "5170f538-ee94-4edb-b305-b358d8cb17ca",
        versionUuid: "3ea8d9dc-6c63-4c4f-bc6a-7eb1e773fbfe",
        fields: {
          LineNumber: 1136,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "6e4fa395-ea20-4374-a502-cc630a25a5fa",
              orderIndex: 1,
              id: "1008",
              name: "Sales Order 02",
              interfaceData: {
                RecordEssentials: {
                  ID: "1008",
                  Name: "Sales Order 02",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "62fe474c-c6de-4962-976a-0b12c13d0d22",
              orderIndex: 1,
              id: "МСП",
              name: "мой си продукт",
              interfaceData: {
                RecordEssentials: {
                  ID: "МСП",
                  Name: "мой си продукт",
                },
              },
            },
          ],
          Quantity: 14,
          PricePerUnit: 2,
          PriceTotal: 28,
          TaxTotal: 3,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
      {
        uuid: "d06cd2fa-1710-42fb-829b-c25828b39d5f",
        versionUuid: "d270a609-1e2b-4e99-8836-cbbad5733b3d",
        fields: {
          LineNumber: 111111,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "6f7f1d6f-9a51-4403-bdb5-3d5818a5bf1e",
              orderIndex: 1,
              id: "1001",
              name: "First Purchase",
              interfaceData: {
                RecordEssentials: {
                  ID: "1001",
                  Name: "First Purchase",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "3a70991d-687d-4d8c-972e-b04b7246ba83",
              orderIndex: 1,
              id: "Test",
              name: "Test Product",
              interfaceData: {
                RecordEssentials: {
                  ID: "Test",
                  Name: "Test Product",
                },
              },
            },
          ],
          Quantity: 11,
          PricePerUnit: 11,
          PriceTotal: 11,
          TaxTotal: 11,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 11,
          CostCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
        },
      },
      {
        uuid: "06354fca-574a-4e1d-b571-de9d3eeb7bca",
        versionUuid: "d55db4e5-c106-49a0-869e-33e77f8e0022",
        fields: {
          LineNumber: 1113,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "3ddb2e36-66df-42e9-8412-57ac77c1eefa",
              orderIndex: 1,
              id: "1009",
              name: "Sales Order 14",
              interfaceData: {
                RecordEssentials: {
                  ID: "1009",
                  Name: "Sales Order 14",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "ae1609cf-fc48-468a-a9c0-3dacff72a657",
              orderIndex: 1,
              id: "NPE",
              name: "New Product example",
              interfaceData: {
                RecordEssentials: {
                  ID: "NPE",
                  Name: "New Product example",
                },
              },
            },
          ],
          Quantity: 14,
          PricePerUnit: 2,
          PriceTotal: 28,
          TaxTotal: 3,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
      {
        uuid: "a0860617-9b18-4cc4-b3e9-e22fb628c367",
        versionUuid: "d81466a4-627c-475e-bcfa-ea26a04c1cd8",
        fields: {
          LineNumber: 1617,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "73e019eb-43dc-4e59-b74e-a16a48e431e7",
              orderIndex: 1,
              id: "1004",
              name: "Sales Order 003",
              interfaceData: {
                RecordEssentials: {
                  ID: "1004",
                  Name: "Sales Order 003",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "86fda20d-ba2e-4e79-a984-46b73fbf1bfa",
              orderIndex: 1,
              id: "NP2",
              name: "New Product 2",
              interfaceData: {
                RecordEssentials: {
                  ID: "NP2",
                  Name: "New Product 2",
                },
              },
            },
          ],
          Quantity: 4,
          PricePerUnit: 6,
          PriceTotal: 24,
          TaxTotal: 3,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
      {
        uuid: "0e827f4b-acf0-4be1-8965-e4e3ce52a3dd",
        versionUuid: "56c348e2-a7ea-401c-85b8-a3d0ed205d1b",
        fields: {
          LineNumber: 2,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "968a8284-3f2d-4a72-aa74-b36a6beaabad",
              orderIndex: 1,
              id: "1000",
              name: "Test",
              interfaceData: {
                RecordEssentials: {
                  ID: "1000",
                  Name: "Test",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "3a70991d-687d-4d8c-972e-b04b7246ba83",
              orderIndex: 1,
              id: "Test",
              name: "Test Product",
              interfaceData: {
                RecordEssentials: {
                  ID: "Test",
                  Name: "Test Product",
                },
              },
            },
          ],
          Quantity: 20,
          PricePerUnit: 3,
          PriceTotal: 60,
          TaxTotal: 20,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 100,
          CostCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
        },
      },
      {
        uuid: "93dc802d-4b09-4275-83d1-ed72a9680137",
        versionUuid: "97ff33fb-042b-4714-868c-566362e97b03",
        fields: {
          LineNumber: 1235,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "ce707ee7-2fb4-423d-a5a9-fb96cd4170e4",
              orderIndex: 1,
              id: "1006",
              name: "Test Svetla",
              interfaceData: {
                RecordEssentials: {
                  ID: "1006",
                  Name: "Test Svetla",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "1315f5e1-8fb0-4862-a81c-861fdfdf5d8a",
              orderIndex: 1,
              id: "003",
              name: "product 003",
              interfaceData: {
                RecordEssentials: {
                  ID: "003",
                  Name: "product 003",
                },
              },
            },
          ],
          Quantity: 500,
          PricePerUnit: 100,
          PriceTotal: 5000,
          TaxTotal: 1,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "67cd615a-69c8-40cc-8576-23cc05ae1da0",
              orderIndex: 1,
              id: "BRL",
              name: "BRL",
              interfaceData: {
                RecordEssentials: {
                  ID: "BRL",
                  Name: "BRL",
                },
              },
            },
          ],
          CostTotal: 5000,
          CostCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "809417d7-6222-4b95-b22a-1c9b7b2405e5",
              orderIndex: 1,
              id: "ARS",
              name: "ARS",
              interfaceData: {
                RecordEssentials: {
                  ID: "ARS",
                  Name: "ARS",
                },
              },
            },
          ],
        },
      },
      {
        uuid: "efaf5507-765f-40dd-81a3-ee207ef5cbd9",
        versionUuid: "ecb9fb47-2c98-4f5c-a423-c79075cbd44e",
        fields: {
          LineNumber: 7853,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "4cb49737-70ae-4472-9fdd-7aea0b7a4d1f",
              orderIndex: 1,
              id: "1010",
              name: "Sales Order 17",
              interfaceData: {
                RecordEssentials: {
                  ID: "1010",
                  Name: "Sales Order 17",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "62fe474c-c6de-4962-976a-0b12c13d0d22",
              orderIndex: 1,
              id: "МСП",
              name: "мой си продукт",
              interfaceData: {
                RecordEssentials: {
                  ID: "МСП",
                  Name: "мой си продукт",
                },
              },
            },
          ],
          Quantity: 4,
          PricePerUnit: 4,
          PriceTotal: 16,
          TaxTotal: 1,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
      {
        uuid: "c737ae0c-2147-48a1-acb8-f77fd9a33c94",
        versionUuid: "296a5ed7-295d-4993-a766-846ed34f183c",
        fields: {
          LineNumber: 11,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "968a8284-3f2d-4a72-aa74-b36a6beaabad",
              orderIndex: 1,
              id: "1000",
              name: "Test",
              interfaceData: {
                RecordEssentials: {
                  ID: "1000",
                  Name: "Test",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "3a70991d-687d-4d8c-972e-b04b7246ba83",
              orderIndex: 1,
              id: "Test",
              name: "Test Product",
              interfaceData: {
                RecordEssentials: {
                  ID: "Test",
                  Name: "Test Product",
                },
              },
            },
          ],
          Quantity: 2,
          PricePerUnit: 2,
          PriceTotal: 4,
          TaxTotal: 4,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "53065f57-7f56-4040-bb6e-978d2e35567e",
              orderIndex: 1,
              id: "BGN",
              name: "BGN",
              interfaceData: {
                RecordEssentials: {
                  ID: "BGN",
                  Name: "BGN",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
      {
        uuid: "c891e13d-26db-416c-b150-f9e79ea4191c",
        versionUuid: "fb6fc5d8-1553-427c-a55d-cd4d99d92daf",
        fields: {
          LineNumber: 1234,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "4d244d3c-77cd-4f80-aab5-26f71410e254",
              orderIndex: 1,
              id: "1013",
              name: "Sales Order 11",
              interfaceData: {
                RecordEssentials: {
                  ID: "1013",
                  Name: "Sales Order 11",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "3a70991d-687d-4d8c-972e-b04b7246ba83",
              orderIndex: 1,
              id: "Test",
              name: "Test Product",
              interfaceData: {
                RecordEssentials: {
                  ID: "Test",
                  Name: "Test Product",
                },
              },
            },
          ],
          Quantity: 4,
          PricePerUnit: 3,
          PriceTotal: 12,
          TaxTotal: 2,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
      {
        uuid: "83275f90-42c5-4d15-b945-ff92562543c8",
        versionUuid: "d9bd0100-c641-437f-b3cb-6ad8f21fcf9a",
        fields: {
          LineNumber: 1010,
          SalesOrder: [
            {
              relatedObjectName: "SalesOrders",
              uuid: "73cbe6fc-2166-4cf7-8d5d-92777b8af55b",
              orderIndex: 1,
              id: "1007",
              name: "Sales Order 01",
              interfaceData: {
                RecordEssentials: {
                  ID: "1007",
                  Name: "Sales Order 01",
                },
              },
            },
          ],
          Product: [
            {
              relatedObjectName: "Products",
              uuid: "3a70991d-687d-4d8c-972e-b04b7246ba83",
              orderIndex: 1,
              id: "Test",
              name: "Test Product",
              interfaceData: {
                RecordEssentials: {
                  ID: "Test",
                  Name: "Test Product",
                },
              },
            },
          ],
          Quantity: 10,
          PricePerUnit: 5,
          PriceTotal: 6,
          TaxTotal: 1,
          PriceCurrency: [
            {
              relatedObjectName: "Currencies",
              uuid: "59b5f43b-8f38-416a-b660-2cad059fc3f3",
              orderIndex: 1,
              id: "EUR",
              name: "EUR",
              interfaceData: {
                RecordEssentials: {
                  ID: "EUR",
                  Name: "EUR",
                },
              },
            },
          ],
          CostTotal: 0,
          CostCurrency: [],
        },
      },
    ],
  },
};
