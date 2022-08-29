#!/usr/bin/env bash

set -x
set -e
set -u
set -o pipefail

readonly __DIR__=$( cd "${BASH_SOURCE[0]%/*}" && pwd )

<<<<<<< HEAD
  if [[ $retry == "$limit" ]]
  then
    exit 1
  fi
}

export PATH="$PATH:./node_modules/.bin"

# for spec in test/e2e/tests/*.spec.js
# do
#   retry mocha --no-timeouts "${spec}"
# done

retry concurrently --kill-others \
  --names 'dapp,e2e' \
  --prefix '[{time}][{name}]' \
  --success first \
  'yarn dapp' \
  'mocha test/e2e/metamask-ui.spec'

# retry concurrently --kill-others \
#   --names 'dapp,e2e' \
#   --prefix '[{time}][{name}]' \
#   --success first \
#   'yarn dapp' \
#   'mocha test/e2e/metamask-responsive-ui.spec'

# retry concurrently --kill-others \
#   --names 'dapp,e2e' \
#   --prefix '[{time}][{name}]' \
#   --success first \
#   'yarn dapp' \
#   'mocha test/e2e/signature-request.spec'

# retry concurrently --kill-others \
#   --names 'e2e' \
#   --prefix '[{time}][{name}]' \
#   --success first \
#   'mocha test/e2e/from-import-ui.spec'

# retry concurrently --kill-others \
#   --names 'e2e' \
#   --prefix '[{time}][{name}]' \
#   --success first \
#   'mocha test/e2e/send-edit.spec'

# retry concurrently --kill-others \
#   --names 'dapp,e2e' \
#   --prefix '[{time}][{name}]' \
#   --success first \
#   'yarn dapp' \
#   'mocha test/e2e/ethereum-on.spec'

# retry concurrently --kill-others \
#   --names 'dapp,e2e' \
#   --prefix '[{time}][{name}]' \
#   --success first \
#   'yarn dapp' \
#   'mocha test/e2e/permissions.spec'

# retry concurrently --kill-others \
#   --names 'sendwithprivatedapp,e2e' \
#   --prefix '[{time}][{name}]' \
#   --success first \
#   'yarn sendwithprivatedapp' \
#   'mocha test/e2e/incremental-security.spec'

# retry concurrently --kill-others \
#   --names 'dapp,e2e' \
#   --prefix '[{time}][{name}]' \
#   --success first \
#   'yarn dapp' \
#   'mocha test/e2e/address-book.spec'

# retry concurrently --kill-others \
#   --names '3box,dapp,e2e' \
#   --prefix '[{time}][{name}]' \
#   --success first \
#   'node test/e2e/mock-3box/server.js' \
#   'yarn dapp' \
#   'mocha test/e2e/threebox.spec'
=======
for spec in "${__DIR__}"/tests/*.spec.js
do
  node "${__DIR__}/run-e2e-test.js" "${spec}"
done

node "${__DIR__}/run-e2e-test.js" "${__DIR__}/metamask-ui.spec.js"
>>>>>>> origin/12311-2
