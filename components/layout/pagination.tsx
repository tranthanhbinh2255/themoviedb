import React, { useState } from 'react'
import { Form, Grid, Pagination, Segment } from 'semantic-ui-react'

const AppPagination: React.FC<any> = ({}) => {
  const [activePage, setActivePage] = useState(1)

  const handlePaginationChange = (e, { activePage }) => {
    setActivePage(activePage)
  }

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Pagination
          floated="right"
          activePage={activePage}
          boundaryRange={1}
          onPageChange={handlePaginationChange}
          size="mini"
          siblingRange={1}
          totalPages={10}
          //   ellipsisItem={showEllipsis ? undefined : null}
          //   firstItem={showFirstAndLastNav ? undefined : null}
          //   lastItem={showFirstAndLastNav ? undefined : null}
          //   prevItem={showPreviousAndNextNav ? undefined : null}
          //   nextItem={showPreviousAndNextNav ? undefined : null}
        />
      </Grid.Column>
    </Grid>
  )
}

export default AppPagination
