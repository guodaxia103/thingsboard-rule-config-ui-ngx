import { TranslateService } from '@ngx-translate/core';

export default function addRuleNodeCoreLocaleEnglish(translate: TranslateService) {

  const enUS = {
    tb: {
      rulenode: {
        'values.filter-replace-value-value':'替换值',
        'values.filter-replace-value-value-required':'替换值必填',
        'values.filter-replace-value':'属性值替换',
        'values.filter-num-filter-formula':'过滤公式',
        'values.filter-num-filter-formula-required':'过滤公式必填',
        'values.filter-num-filter-key':'属性',
        'values.filter-num-filter-key-required':'属性必填',
        'values.filter-num-filter':'属性值过滤',
        'data.filter-clear-key':'清除不在条件内的属性',
        'data.filter-select-all-key':'所有属性同时存在',
        'data.filter-filter-entity-name':'实体名过滤',
        'time.sum-time-start':'开始时间',
        'time.sum-time-start-range':'开始时间范围异常',
        'time.sum-sum-suffix':'统计结果属性后缀',
        'time.sum-sum-suffix-required':'统计结果属性后缀必填',
        'time.sum-suffix':'属性后缀',
        'time.sum-suffix-required':'属性后缀必填',
        'time.sum-time-type':'时间统计类型',
        'time.sum-hour':'小时',
        'time.sum-day':'天',
        'time.sum-month':'月',
        'time.sum-year':'年',
        'coefficient-calculate-timeseries': '时序属性',
        'custom.calculate-formula':'计算公式',
        'custom.calculate-formula-required':'计算公式必填',
        'custom.calculate-result':'计算结果',
        'custom.calculate-result-entity':'结果实体',
        'custom.calculate-result-entity-required':'结果实体必填',
        'custom.calculate-result-entity-key':'结果实体属性',
        'custom.calculate-result-entity-key-required':'结果实体属性必填',
        'custom.calculate-latest-data':'最新数据',
        'custom.calculate-ts-data':'时序数据',
        'specific.value-like-filter':'模糊过滤',
        'specific.value-latest-key-names':'属性集',
        'specific.value-replace':'属性名替换',
        'specific.value-replace-old-key':'原始属性',
        'specific.value-replace-old-key-required':'原始属性必填',
        'specific.value-replace-new-key':'新属性',
        'specific.value-replace-new-key-required':'新属性必填',
        'specific.value-formula':'计算公式',
        'specific.value-formula-key':'计算结果属性',
        'specific.value-formula-key-required':'计算结果属性',
        'specific.value-formula-value':'计算公式',
        'specific.value-formula-value-required':'计算公式必填',
        'specific.value-search-value':'动态查询变化(CT/PT)',
        'specific.value-pt':'PT(A98)',
        'specific.value-pt-range':'请正确输入PT的值',
        'specific.value-ct':'CT(A97)',
        'specific.value-ct-range':'请正确输入CT的值',
        'specific.value-old-key-names':'同时间属性集',
        'specific.value-data-source': '计算实体',
        'specific.value-data-source-required': '计算实体必填',
        'specific.value-data-source-num': '实体序号(英文字符)',
        'specific.value-data-source-num-required': '实体序号(英文字符)必填',
        'specific.value-data-source-name': '实体名称',
        'specific.value-data-source-name-required': '实体名称必填',
        'specific.value-data-source-key': '实体属性',
        'specific.value-data-source-key-required': '实体属性必填',
        'specific.value-data-source-value': '默认值',
        'specific.value-data-source-value-required': '默认值必填',
        'filter.and.count.rate-value-hint':'频率值等于0时,根据频率属性动态查询频率',
        'filter.and.count.rate-value': '频率值(秒)',
        'filter.and.count.link-Key-hint': '是否将计数结果存入结果属性(count)或属性+count',
        'filter.and.count.rate-key': '频率属性',
        'filter.and.count.rate-key-required': '数据采集频率属性必填',
        'filter.and.count.data-check': '数据检查',
        'filter.and.count.output-count-data': '输出计数结果',
        'filter.and.count.filter-invalid-key': '过滤无效属性',
        'filter.and.count.every-time': '实时计数',
        'filter.and.count.link-Key': '关联属性',
        'filter.and.count.count': '计数结果属性',
        'filter.and.count.count-required': '计数属性必填',
        'filter.and.count.start-time': '开始时间',
        'filter.and.count.start-time-required': '开始时间必填',
        'filter.and.count.interval-time-type': '计数类型',
        'filter.and.count.interval-time-minutes': '分钟',
        'filter.and.count.interval-time-hours': '小时',
        'filter.and.count.interval-time-days': '天',
        'minute.interval.compute.putOff': '临近数据查询',
        'minute.interval.compute.putHours': '查询范围(小时)',
        'minute.interval.compute.filter-entity': '过滤对象',
        'minute.interval.compute.filter-type': '过滤类型',
        'minute.interval.compute.filter-type-no': '无',
        'minute.interval.compute.filter-type-contain': '包含',
        'minute.interval.compute.filter-type-exclude': '排除',
        'minute.interval.compute.data-type': '数据类型',
        'minute.interval.compute.data-type-increment': '递增量',
        'minute.interval.compute.data-type-interval': '用量',
        'minute.interval.compute.interval': '区间/频率（分）',
        'minute.interval.compute.interval-range': '区间/频率（分）必填',
        'minute.interval.compute.every-time': '实时计算',
        'minute.interval.compute.zero': '结束值小于开始值时，结束值 - 0',
        'minute.interval.compute.am': '分属性后缀',
        'minute.interval.compute.am-required': '属性必填',
        'interval.compute.filter-type-contain': '包含',
        'interval.compute.filter-type-exclude': '排除',
        'subset-father-device-key-required': '父类属性必填',
        'subset-father-device-key-hint': '子类设备集求和后存入此属性',
        'subset-father-device-key': '父类属性',
        'subset-father-device': '父类设备',
        'subset-devices-key-required': '属性必填',
        'subset-devices-key': '属性',
        'subset-devices-name-required': '设备名必填',
        'subset-devices-name': '设备名',
        'subset-devices': '求和设备子集',
        'hh-start': '小时起始分设置 （分）0-59',
        'hh-key': '小时区间用量属性名',
        'hh-value-range': '整分设置0-59 分',
        'hh-key-required': '小时区间用量属性名必填',
        'dd-start': '日起始时设置 （时）0-23',
        'dd-key': '日区间用量属性名',
        'dd-value-range': '整分设置0-23 时',
        'dd-key-required': '日区间用量属性名必填',
        'mm-start': '月起起始日设置 （日）1-31',
        'mm-key': '月区间用量属性名',
        'mm-value-range': '整日设置1-31 日',
        'mm-key-required': '月区间用量属性名必填',
        'yy-start': '年起起始月设置 （月）1-12',
        'yy-key': '年区间用量属性名',
        'yy-value-range': '整月设置1-12 月',
        'yy-key-required': '年区间用量属性名必填',
        'list-attributes': '属性集',
        'list-attributes-required': '请至少输入一个属性key',
        'total-is-save': '计算后的数据是否直接保存',
        'list-entity-name': '实体集合',
        'filter-entity': '过滤实体',
        'filter-type': '过滤类型',
        'is-filter-entity': '是否过滤实体',
        'filter-type-contain': '包含',
        'filter-type-exclude': '排除',
        'create-entity-if-not-exists': 'Create new entity if not exists',
        'create-entity-if-not-exists-hint': 'Create a new entity set above if it does not exist.',
        'entity-name-pattern': 'Name pattern',
        'entity-name-pattern-required': 'Name pattern is required',
        'entity-name-pattern-hint': 'Name pattern, use <code>${metaKeyName}</code> to substitute variables from metadata',
        'entity-type-pattern': 'Type pattern',
        'entity-type-pattern-required': 'Type pattern is required',
        'entity-type-pattern-hint': 'Type pattern, use <code>${metaKeyName}</code> to substitute variables from metadata',
        'entity-cache-expiration': 'Entities cache expiration time (sec)',
        'entity-cache-expiration-hint':
          'Specifies maximum time interval allowed to store found entity records. 0 value means that records will never expire.',
        'entity-cache-expiration-required': 'Entities cache expiration time is required.',
        'entity-cache-expiration-range': 'Entities cache expiration time should be greater than or equal to 0.',
        'customer-name-pattern': 'Customer name pattern',
        'customer-name-pattern-required': 'Customer name pattern is required',
        'create-customer-if-not-exists': 'Create new customer if not exists',
        'customer-cache-expiration': 'Customers cache expiration time (sec)',
        'customer-name-pattern-hint': 'Customer name pattern, use <code>${metaKeyName}</code> to substitute variables from metadata',
        'customer-cache-expiration-hint':
          'Specifies maximum time interval allowed to store found customer records. 0 value means that records will never expire.',
        'customer-cache-expiration-required': 'Customers cache expiration time is required.',
        'customer-cache-expiration-range': 'Customers cache expiration time should be greater than or equal to 0.',
        'start-interval': 'Start Interval',
        'end-interval': 'End Interval',
        'start-interval-time-unit': 'Start Interval Time Unit',
        'end-interval-time-unit': 'End Interval Time Unit',
        'fetch-mode': 'Fetch mode',
        'fetch-mode-hint': 'If selected fetch mode \'ALL\'  you able to choose telemetry sampling order.',
        'order-by': 'Order by',
        'order-by-hint': 'Select to choose telemetry sampling order.',
        limit: 'Limit',
        'limit-hint': 'Min limit value is 2, max - 1000. In case you want to fetch a single entry, ' +
          'select fetch mode \'FIRST\' or \'LAST\'.',
        'time-unit-milliseconds': 'Milliseconds',
        'time-unit-seconds': 'Seconds',
        'time-unit-minutes': 'Minutes',
        'time-unit-hours': 'Hours',
        'time-unit-days': 'Days',
        'time-value-range': 'Time value should be in a range from 1 to 2147483647.',
        'start-interval-value-required': 'Start interval value is required.',
        'end-interval-value-required': 'End interval value is required.',
        filter: 'Filter',
        switch: 'Switch',
        'message-type': 'Message type',
        'message-type-required': 'Message type is required.',
        'message-types-filter': 'Message types filter',
        'no-message-types-found': 'No message types found',
        'no-message-type-matching': '\'{{messageType}}\' not found.',
        'create-new-message-type': 'Create a new one!',
        'message-types-required': 'Message types are required.',
        'client-attributes': '客户端属性',
        'client-attributes-hint': 'Client attributes, use <code>${metaKeyName}</code> to substitute variables from metadata',
        'shared-attributes': '共享属性',
        'shared-attributes-hint': 'Shared attributes, use <code>${metaKeyName}</code> to substitute variables from metadata',
        'server-attributes': '服务端属性',
        'server-attributes-hint': 'Server attributes, use <code>${metaKeyName}</code> to substitute variables from metadata',
        'latest-timeseries': '最新属性',
        'latest-timeseries-hint': 'Latest timeseries, use <code>${metaKeyName}</code> to substitute variables from metadata',
        'data-keys': 'Message data',
        'metadata-keys': 'Message metadata',
        'relations-query': 'Relations query',
        'device-relations-query': 'Device relations query',
        'max-relation-level': 'Max relation level',
        'relation-type-pattern': 'Relation type pattern',
        'relation-type-pattern-hint': 'Relation type pattern, use <code>${metaKeyName}</code> to substitute variables from metadata',
        'relation-type-pattern-required': 'Relation type pattern is required',
        'relation-types-list': 'Relation types to propagate',
        'relation-types-list-hint': 'If Propagate relation types are not selected, ' +
          'alarms will be propagated without filtering by relation type.',
        'unlimited-level': 'Unlimited level',
        'latest-telemetry': 'Latest telemetry',
        'attr-mapping': 'Attributes mapping',
        'source-attribute': 'Source attribute',
        'source-attribute-required': 'Source attribute is required.',
        'source-telemetry': 'Source telemetry',
        'source-telemetry-required': 'Source telemetry is required.',
        'target-attribute': 'Target attribute',
        'target-attribute-required': 'Target attribute is required.',
        'attr-mapping-required': 'At least one attribute mapping should be specified.',
        'fields-mapping': 'Fields mapping',
        'fields-mapping-required': 'At least one field mapping should be specified.',
        'source-field': 'Source field',
        'source-field-required': 'Source field is required.',
        'originator-source': 'Originator source',
        'originator-customer': 'Customer',
        'originator-tenant': 'Tenant',
        'originator-related': 'Related',
        'originator-alarm-originator': 'Alarm Originator',
        'clone-message': 'Clone message',
        transform: 'Transform',
        'default-ttl': 'Default TTL in seconds',
        'default-ttl-required': 'Default TTL is required.',
        'min-default-ttl-message': 'Only 0 minimum TTL is allowed.',
        'message-count': 'Message count (0 - unlimited)',
        'message-count-required': 'Message count is required.',
        'min-message-count-message': 'Only 0 minimum message count is allowed.',
        'period-seconds': 'Period in seconds',
        'period-seconds-required': 'Period is required.',
        'use-metadata-period-in-seconds-patterns': 'Use metadata period in seconds pattern',
        'use-metadata-period-in-seconds-patterns-hint':
          'If selected, rule node use period in seconds interval pattern from message metadata ' +
          'assuming that intervals are in the seconds.',
        'period-in-seconds-pattern': 'Period in seconds metadata pattern',
        'period-in-seconds-pattern-required': 'Period in seconds pattern is required',
        'period-in-seconds-pattern-hint':
          'Period in seconds pattern, use <code>${metaKeyName}</code> to substitute variables from metadata',
        'min-period-seconds-message': 'Only 1 second minimum period is allowed.',
        originator: 'Originator',
        'message-body': 'Message body',
        'message-metadata': 'Message metadata',
        generate: 'Generate',
        'test-generator-function': 'Test generator function',
        generator: 'Generator',
        'test-filter-function': 'Test filter function',
        'test-switch-function': 'Test switch function',
        'test-transformer-function': 'Test transformer function',
        transformer: 'Transformer',
        'alarm-create-condition': 'Alarm create condition',
        'test-condition-function': 'Test condition function',
        'alarm-clear-condition': 'Alarm clear condition',
        'alarm-details-builder': 'Alarm details builder',
        'test-details-function': 'Test details function',
        'alarm-type': 'Alarm type',
        'alarm-type-required': 'Alarm type is required.',
        'alarm-severity': 'Alarm severity',
        'alarm-severity-required': 'Alarm severity is required',
        'alarm-status-filter': 'Alarm status filter',
        'alarm-status-list-empty': 'Alarm status list is empty',
        'no-alarm-status-matching': 'No alarm status matching were found.',
        propagate: 'Propagate',
        condition: 'Condition',
        details: 'Details',
        'to-string': 'To string',
        'test-to-string-function': 'Test to string function',
        'from-template': 'From Template',
        'from-template-required': 'From Template is required',
        'from-template-hint': 'From address template, use <code>${metaKeyName}</code> to substitute variables from metadata',
        'to-template': 'To Template',
        'to-template-required': 'To Template is required',
        'mail-address-list-template-hint':
          'Comma separated address list, use <code>${metaKeyName}</code> to substitute variables from metadata',
        'cc-template': 'Cc Template',
        'bcc-template': 'Bcc Template',
        'subject-template': 'Subject Template',
        'subject-template-required': 'Subject Template is required',
        'subject-template-hint': 'Mail subject template, use <code>${metaKeyName}</code> to substitute variables from metadata',
        'body-template': 'Body Template',
        'body-template-required': 'Body Template is required',
        'body-template-hint': 'Mail body template, use <code>${metaKeyName}</code> to substitute variables from metadata',
        'request-id-metadata-attribute': 'Request Id Metadata attribute name',
        'timeout-sec': 'Timeout in seconds',
        'timeout-required': 'Timeout is required',
        'min-timeout-message': 'Only 0 minimum timeout value is allowed.',
        'endpoint-url-pattern': 'Endpoint URL pattern',
        'endpoint-url-pattern-required': 'Endpoint URL pattern is required',
        'endpoint-url-pattern-hint': 'HTTP URL address pattern, use <code>${metaKeyName}</code> to substitute variables from metadata',
        'request-method': 'Request method',
        'use-simple-client-http-factory': 'Use simple client HTTP factory',
        'read-timeout': 'Read timeout in millis',
        'read-timeout-hint': 'The value of 0 means an infinite timeout',
        'max-parallel-requests-count': 'Max number of parallel requests',
        'max-parallel-requests-count-hint': 'The value of 0 specifies no limit in parallel processing',
        headers: 'Headers',
        'headers-hint': 'Use <code>${metaKeyName}</code> in header/value fields to substitute variables from metadata',
        header: 'Header',
        'header-required': 'Header is required',
        value: 'Value',
        'value-required': 'Value is required',
        'topic-pattern': 'Topic pattern',
        'topic-pattern-required': 'Topic pattern is required',
        'mqtt-topic-pattern-hint': 'MQTT topic pattern, use <code>${metaKeyName}</code> to substitute variables from metadata',
        topic: 'Topic',
        'topic-required': 'Topic is required',
        'bootstrap-servers': 'Bootstrap servers',
        'bootstrap-servers-required': 'Bootstrap servers value is required',
        'other-properties': 'Other properties',
        key: 'Key',
        'key-required': 'Key is required',
        retries: 'Automatically retry times if fails',
        'min-retries-message': 'Only 0 minimum retries is allowed.',
        'batch-size-bytes': 'Produces batch size in bytes',
        'min-batch-size-bytes-message': 'Only 0 minimum batch size is allowed.',
        'linger-ms': 'Time to buffer locally (ms)',
        'min-linger-ms-message': 'Only 0 ms minimum value is allowed.',
        'buffer-memory-bytes': 'Client buffer max size in bytes',
        'min-buffer-memory-message': 'Only 0 minimum buffer size is allowed.',
        acks: 'Number of acknowledgments',
        'key-serializer': 'Key serializer',
        'key-serializer-required': 'Key serializer is required',
        'value-serializer': 'Value serializer',
        'value-serializer-required': 'Value serializer is required',
        'topic-arn-pattern': 'Topic ARN pattern',
        'topic-arn-pattern-required': 'Topic ARN pattern is required',
        'topic-arn-pattern-hint': 'Topic ARN pattern, use <code>${metaKeyName}</code> to substitute variables from metadata',
        'aws-access-key-id': 'AWS Access Key ID',
        'aws-access-key-id-required': 'AWS Access Key ID is required',
        'aws-secret-access-key': 'AWS Secret Access Key',
        'aws-secret-access-key-required': 'AWS Secret Access Key is required',
        'aws-region': 'AWS Region',
        'aws-region-required': 'AWS Region is required',
        'exchange-name-pattern': 'Exchange name pattern',
        'routing-key-pattern': 'Routing key pattern',
        'message-properties': 'Message properties',
        host: 'Host',
        'host-required': 'Host is required',
        port: 'Port',
        'port-required': 'Port is required',
        'port-range': 'Port should be in a range from 1 to 65535.',
        'virtual-host': 'Virtual host',
        username: 'Username',
        password: 'Password',
        'automatic-recovery': 'Automatic recovery',
        'connection-timeout-ms': 'Connection timeout (ms)',
        'min-connection-timeout-ms-message': 'Only 0 ms minimum value is allowed.',
        'handshake-timeout-ms': 'Handshake timeout (ms)',
        'min-handshake-timeout-ms-message': 'Only 0 ms minimum value is allowed.',
        'client-properties': 'Client properties',
        'queue-url-pattern': 'Queue URL pattern',
        'queue-url-pattern-required': 'Queue URL pattern is required',
        'queue-url-pattern-hint': 'Queue URL pattern, use <code>${metaKeyName}</code> to substitute variables from metadata',
        'delay-seconds': 'Delay (seconds)',
        'min-delay-seconds-message': 'Only 0 seconds minimum value is allowed.',
        'max-delay-seconds-message': 'Only 900 seconds maximum value is allowed.',
        name: '名字',
        'name-required': 'Name is required',
        'queue-type': 'Queue type',
        'sqs-queue-standard': 'Standard',
        'sqs-queue-fifo': 'FIFO',
        'gcp-project-id': 'GCP project ID',
        'gcp-project-id-required': 'GCP project ID is required',
        'gcp-service-account-key': 'GCP service account key file',
        'gcp-service-account-key-required': 'GCP service account key file is required',
        'pubsub-topic-name': 'Topic name',
        'pubsub-topic-name-required': 'Topic name is required',
        'message-attributes': 'Message attributes',
        'message-attributes-hint': 'Use <code>${metaKeyName}</code> in name/value fields to substitute variables from metadata',
        'connect-timeout': 'Connection timeout (sec)',
        'connect-timeout-required': 'Connection timeout is required.',
        'connect-timeout-range': 'Connection timeout should be in a range from 1 to 200.',
        'client-id': 'Client ID',
        'device-id': 'Device ID',
        'device-id-required': 'Device ID is required.',
        'clean-session': 'Clean session',
        'enable-ssl': 'Enable SSL',
        credentials: 'Credentials',
        'credentials-type': 'Credentials type',
        'credentials-type-required': 'Credentials type is required.',
        'credentials-anonymous': 'Anonymous',
        'credentials-basic': 'Basic',
        'credentials-pem': 'PEM',
        'credentials-sas': 'Shared Access Signature',
        'sas-key': 'SAS Key',
        'sas-key-required': 'SAS Key is required.',
        hostname: 'Hostname',
        'hostname-required': 'Hostname is required.',
        'azure-ca-cert': 'CA certificate file',
        'username-required': 'Username is required.',
        'password-required': 'Password is required.',
        'ca-cert': 'CA certificate file *',
        'private-key': 'Private key file *',
        cert: 'Certificate file *',
        'no-file': 'No file selected.',
        'drop-file': 'Drop a file or click to select a file to upload.',
        'private-key-password': 'Private key password',
        'use-system-smtp-settings': 'Use system SMTP settings',
        'use-metadata-interval-patterns': 'Use metadata interval patterns',
        'use-metadata-interval-patterns-hint':
          'If selected, rule node use start and end interval patterns from message metadata ' +
          'assuming that intervals are in the milliseconds.',
        'use-message-alarm-data': 'Use message alarm data',
        'check-all-keys': 'Check that all selected keys are present',
        'check-all-keys-hint': 'If selected, checks that all specified keys are present in the message data and metadata.',
        'check-relation-to-specific-entity': 'Check relation to specific entity',
        'check-relation-hint': 'Checks existence of relation to specific entity or to any entity based on direction and relation type.',
        'delete-relation-to-specific-entity': 'Delete relation to specific entity',
        'delete-relation-hint':
          'Deletes relation from the originator of the incoming message to the specified ' +
          'entity or list of entities based on direction and type.',
        'remove-current-relations': 'Remove current relations',
        'remove-current-relations-hint':
          'Removes current relations from the originator of the incoming message based on direction and type.',
        'change-originator-to-related-entity': 'Change originator to related entity',
        'change-originator-to-related-entity-hint': 'Used to process submitted message as a message from another entity.',
        'start-interval-pattern': 'Start interval pattern',
        'end-interval-pattern': 'End interval pattern',
        'start-interval-pattern-required': 'Start interval pattern is required',
        'end-interval-pattern-required': 'End interval pattern is required',
        'start-interval-pattern-hint': 'Start interval pattern, use <code>${metaKeyName}</code> to substitute variables from metadata',
        'end-interval-pattern-hint': 'End interval pattern, use <code>${metaKeyName}</code> to substitute variables from metadata',
        'smtp-protocol': 'Protocol',
        'smtp-host': 'SMTP host',
        'smtp-host-required': 'SMTP host is required.',
        'smtp-port': 'SMTP port',
        'smtp-port-required': 'You must supply a smtp port.',
        'smtp-port-range': 'SMTP port should be in a range from 1 to 65535.',
        'timeout-msec': 'Timeout ms',
        'min-timeout-msec-message': 'Only 0 ms minimum value is allowed.',
        'enter-username': 'Enter username',
        'enter-password': 'Enter password',
        'enable-tls': 'Enable TLS',
        'tls-version': 'TLS version',
        'enable-proxy': 'Enable proxy',
        'use-system-proxy-properties': 'Use system proxy properties',
        'proxy-host': 'Proxy host',
        'proxy-host-required': 'Proxy host is required.',
        'proxy-port': 'Proxy port',
        'proxy-port-required': 'Proxy port is required.',
        'proxy-port-range': 'Proxy port should be in a range from 1 to 65535.',
        'proxy-user': 'Proxy user',
        'proxy-password': 'Proxy password',
        'proxy-scheme': 'Proxy scheme',
        'min-period-0-seconds-message': 'Only 0 second minimum period is allowed.',
        'max-pending-messages': 'Maximum pending messages',
        'max-pending-messages-required': 'Maximum pending messages is required.',
        'max-pending-messages-range': 'Maximum pending messages should be in a range from 1 to 100000.',
        'originator-types-filter': 'Originator types filter',
        'interval-seconds': 'Interval in seconds',
        'interval-seconds-required': 'Interval is required.',
        'min-interval-seconds-message': 'Only 1 second minimum interval is allowed.',
        'output-timeseries-key-prefix': 'Output timeseries key prefix',
        'output-timeseries-key-prefix-required': 'Output timeseries key prefix required.',
        'separator-hint': 'You should press "enter" to complete field input.',
        'entity-details': 'Select entity details:',
        'entity-details-title': 'Title',
        'entity-details-country': 'Country',
        'entity-details-state': 'State',
        'entity-details-zip': 'Zip',
        'entity-details-address': 'Address',
        'entity-details-address2': 'Address2',
        'entity-details-additional_info': 'Additional Info',
        'entity-details-phone': 'Phone',
        'entity-details-email': 'Email',
        'add-to-metadata': 'Add selected details to message metadata',
        'add-to-metadata-hint': 'If selected, adds the selected details keys to the message metadata instead of message data.',
        'entity-details-list-empty': 'No entity details selected.',
        'no-entity-details-matching': 'No entity details matching were found.',
        'custom-table-name': 'Custom table name',
        'custom-table-name-required': 'Table Name is required',
        'custom-table-hint': 'You should enter the table name without prefix \'cs_tb_\'.',
        'message-field': 'Message field',
        'message-field-required': 'Message field is required.',
        'table-col': 'Table column',
        'table-col-required': 'Table column is required.',
        'latitude-key-name': 'Latitude key name',
        'longitude-key-name': 'Longitude key name',
        'latitude-key-name-required': 'Latitude key name is required.',
        'longitude-key-name-required': 'Longitude key name is required.',
        'fetch-perimeter-info-from-message-metadata': 'Fetch perimeter information from message metadata',
        'perimeter-circle': 'Circle',
        'perimeter-polygon': 'Polygon',
        'perimeter-type': 'Perimeter type',
        'circle-center-latitude': 'Center latitude',
        'circle-center-latitude-required': 'Center latitude is required.',
        'circle-center-longitude': 'Center longitude',
        'circle-center-longitude-required': 'Center longitude is required.',
        'range-unit-meter': 'Meter',
        'range-unit-kilometer': 'Kilometer',
        'range-unit-foot': 'Foot',
        'range-unit-mile': 'Mile',
        'range-unit-nautical-mile': 'Nautical mile',
        'range-units': 'Range units',
        range: 'Range',
        'range-required': 'Range is required.',
        'polygon-definition': 'Polygon definition',
        'polygon-definition-required': 'Polygon definition is required.',
        'polygon-definition-hint':
          'Please, use the following format for manual definition of polygon: [[lat1,lon1],[lat2,lon2], ... ,[latN,lonN]].',
        'min-inside-duration': 'Minimal inside duration',
        'min-inside-duration-value-required': 'Minimal inside duration is required',
        'min-inside-duration-time-unit': 'Minimal inside duration time unit',
        'min-outside-duration': 'Minimal outside duration',
        'min-outside-duration-value-required': 'Minimal outside duration is required',
        'min-outside-duration-time-unit': 'Minimal outside duration time unit',
        'tell-failure-if-absent': 'Tell Failure',
        'tell-failure-if-absent-hint': 'If at least one selected key doesn\'t exist the outbound message will report "Failure".',
        'get-latest-value-with-ts': 'Fetch Latest telemetry with Timestamp',
        'get-latest-value-with-ts-hint':
          'If selected, latest telemetry values will be added to the outbound message metadata with timestamp, ' +
          'e.g: "temp": "&lcub;\\"ts\\":1574329385897,\\"value\\":42&rcub;"',
        'use-redis-queue': 'Use redis queue for message persistence',
        'trim-redis-queue': 'Trim redis queue',
        'redis-queue-max-size': 'Redis queue max size',
        'add-metadata-key-values-as-kafka-headers': 'Add Message metadata key-value pairs to Kafka record headers',
        'add-metadata-key-values-as-kafka-headers-hint': 'If selected, key-value pairs from message metadata will be added to the outgoing records headers as byte arrays with predefined charset encoding.',
        'charset-encoding': 'Charset encoding',
        'charset-encoding-required': 'Charset encoding is required.',
        'charset-us-ascii': 'US-ASCII',
        'charset-iso-8859-1': 'ISO-8859-1',
        'charset-utf-8': 'UTF-8',
        'charset-utf-16be': 'UTF-16BE',
        'charset-utf-16le': 'UTF-16LE',
        'charset-utf-16': 'UTF-16',
        'select-queue-hint': 'The queue name can be selected from a drop-down list or add a custom name.'
      },
      'key-val': {
        key: 'Key',
        value: 'Value',
        'remove-entry': 'Remove entry',
        'add-entry': 'Add entry'
      }
    }
  };
  translate.setTranslation('en_US', enUS, true);
}
