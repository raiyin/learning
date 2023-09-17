SELECT fulf.id                 as fulfilment_id,
       fulf.name               as fulfilment_name,
       pack.id                 as package_id,
       pack.name               as package_name,
       cast(trans_out.arrival_time as timestamp(0)) as time_in,
       cast(trans_in.departure_time as timestamp(0)) as time_out,
       (CONCAT(DATE_PART('days', AGE(trans_in.departure_time, trans_out.arrival_time)),
               CASE
                   WHEN DATE_PART('days', AGE(trans_in.departure_time, trans_out.arrival_time)) = 1
                       THEN ' day'
                   ELSE ' days'
                   END
           ))                  as storage_time
FROM transportations as trans_out
         JOIN transportations as trans_in
              ON trans_out.destination_id = trans_in.source_id AND trans_out.package_id = trans_in.package_id
         JOIN packages as pack ON trans_in.package_id = pack.id
         JOIN fulfilments as fulf on trans_in.source_id = fulf.id
ORDER by storage_time DESC, time_in ASC, fulfilment_id ASC, package_id ASC